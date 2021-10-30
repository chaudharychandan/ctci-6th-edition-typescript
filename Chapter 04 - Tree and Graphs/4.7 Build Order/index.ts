/**
 * Time complexity: O(P + D)
 * Space complexity: O(P * D)
 *
 * @param projects - list of projects
 * @param dependencies - list of dependencies
 * @returns the build order of project based on dependencies
 */
export function findBuildOrder (projects: string[], dependencies: string[][]): string[] | null {
    const graph = buildGraph(projects, dependencies);

    const projectNodes = orderProjects(graph.nodes);
    if (projectNodes === null) return null;

    return projectNodes.map(node => node.name);
}

function buildGraph(projects: string[], dependencies: string[][]): Graph {
    const graph = new Graph();

    for (const project of projects) {
        if (!graph.map.has(project)) graph.getOrCreateNode(project);
    }

    for (const dependency of dependencies) {
        const [first, second] = dependency;

        graph.addEdge(first, second);
    }

    return graph;
}

function orderProjects(projects: Project[]): Project[] | null {
    const order: (Project|null)[] = [];

    // Add the projects having 0 dependencies as roots
    let endOfList = addNonDependent(order, projects, 0);

    let toBeProcessed = 0;

    while (toBeProcessed < projects.length) {
        const current = order[toBeProcessed];

        // We have a circular dependency since there are no remaining projects with zero depdencies
        if (!current) return null;

        // Remove current from dependencies
        const { children } = current;
        for (const child of children) {
            child.dependencies--;
        }

        // Add children that have no more depedencies on them
        endOfList = addNonDependent(order, children, endOfList);
        toBeProcessed++;
    }

    return order as Project[];
}

/**
 * Inserts projects with zero dependencies into order array, starting at index offset
 *
 * @param order - the order array
 * @param projects  - the projects array
 * @param offset - the starting index
 * @returns the end index + 1
 */
function addNonDependent(order: (Project|null)[], projects: Project[], offset: number) {
    for (const project of projects) {
        if (project.dependencies === 0) {
            order[offset] = project;
            offset++;
        }
    }

    return offset;
}

export class Graph {
    nodes: Project[];
    map: Map<string, Project>;

    constructor() {
        this.nodes = [];
        this.map = new Map<string, Project>();
    }

    getOrCreateNode(name: string): Project {
        let project = this.map.get(name);

        if (!project) {
            project = new Project(name);
            this.nodes = [...this.nodes, project];
            this.map.set(name, project);
        }

        return project;
    }

    addEdge(startName: string, endName: string): void {
        const start = this.getOrCreateNode(startName);
        const end = this.getOrCreateNode(endName);
        start.addNeighbour(end);
    }
}

class Project {
    name: string;
    children: Project[] = [];
    map: Map<string, Project> = new Map<string, Project>();
    dependencies = 0;

    constructor(name: string) {
        this.name = name;
    }

    addNeighbour(project: Project): void {
        if (!this.map.has(project.name)) {
            this.children = [...this.children, project];
            this.map.set(project.name, project);
            project.dependencies++;
        }
    }
}
