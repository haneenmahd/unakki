export type ComponentConfig = {
    rootDir: string;
    files: ComponentConfigFiles[];
}

export type ComponentConfigFiles = {
    name: string;
    defaultValue: string;
}