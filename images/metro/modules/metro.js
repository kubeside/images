import { modules } from "../loader.js";
export const metrics = [
    {
        name: "metro_module_errors",
        type: "counter",
        description: "How many errors per module",
        collect: async () => {
            return modules.map(module => {
                return {
                    value: module.failCount,
                    params: {
                        module: module.name
                    }
                };
            });
        }

    },
];
