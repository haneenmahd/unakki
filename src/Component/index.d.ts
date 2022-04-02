export type ComponentConfig = {
    name: string;
    rootDir: string;
    files: ComponentConfigFiles[];
}

export type ComponentConfigFiles = {
    name: string;
    defaultValue: string;
}