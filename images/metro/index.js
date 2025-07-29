import express from "express";
import { setupModules, modules, collectMetrics } from "./loader.js";

export const app = express();

app.get("/", async (req, res) => {
    let lines = [];

    lines.push("Metro metrics service");

    const moduleNames = modules.map(module => module.name);
    lines.push(`Modules loaded: ${moduleNames.join(" ")}`);

    lines.push("");
    lines.push("See /metrics for metrics");
    
    await res.type("text/plain");
    await res.send(lines.join("\n"));
})

app.get("/metrics", async (req, res) => {
    const metrics = await collectMetrics();
    let lines = [];

    Object.values(metrics).forEach(metric => {
        if (metric.description !== undefined) {
            lines.push(`# HELP ${metric.name} ${metric.description}`);
        }
        lines.push(`# TYPE ${metric.name} ${metric.type}`);
        
        if (Array.isArray(metric.value)) {
            metric.value.forEach(value => {
                lines.push(`${metric.name}{${formatKeys(value.params)}} ${value.value}`);
            });
        } else {
            lines.push(`${metric.name} ${metric.value}`);
        }

    });

    await res.header("Content-Type", "text/plain; charset=utf-8").send(lines.join("\n"));

})

function formatKeys(params) {
    let formattedParams = [];

    Object.keys(params).forEach(name => {
        let value = params[name];
        formattedParams.push(`${name}=${JSON.stringify(value)}`);
    });

    return formattedParams.join(", ");
}

// Start app
await setupModules();

const PORT = 80;
console.log(`Serving on port ${PORT}`);
app.listen(PORT);
