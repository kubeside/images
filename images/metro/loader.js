import { readdir } from "node:fs/promises";
import { MODULE_PATH, METRO_MODULES } from "./constants.js";

export const modules = [];

export async function setupModules() {
    const modulePaths = await readdir(MODULE_PATH);

    await Promise.all(modulePaths.map(async (modulePath) => {
        if (METRO_MODULES !== undefined) {
            if (!METRO_MODULES.includes(modulePath)) {
                console.log(`Skipping ${modulePath} as it is not in METRO_MODULES`);
                return;
            }
        }

        let module;
        try {
            module = await import(MODULE_PATH + modulePath);
        } catch (e) {
            console.error(`Failed to load module: ${modulePath}`);
            console.log(e.stack);
            return;
        }

        const runtimeModule = {
            name: modulePath.replace(".js", ""),
            path: modulePath,
            metrics: module.metrics,
            failCount: 0
        };
        modules.push(runtimeModule);
    }));

    const moduleNames = modules.map(module => module.name).join(", ");
    console.log(`Loaded modules: ${moduleNames}`);
}

export async function collectMetrics() {
    const metrics = {};

    await Promise.all(modules.map(async module => {
        await Promise.all(module.metrics.map(async metricModule => {
            let result;
            try {
                result = await metricModule.collect();
            } catch (e) {
                module.failCount += 1;
                console.log(`Module ${e} has failed: ${e}`);
                console.log(e.stack);
                return;
            }
            const metric = {
                name: metricModule.name,
                description: metricModule.description,
                type: metricModule.type,
                value: result
            };
            metrics[metricModule.name] = metric;
        }));
    }));
    return metrics;
}
