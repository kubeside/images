export const metrics = [
    {
        name: "connectivity",
        type: "gauge",
        description: "0 if site is unreachable. 1 if site is reachable",
        collect: async () => {
            const sites = ["https://1.1.1.1", "https://8.8.8.8"];

            const result = [];

            await Promise.all(sites.map(async (site) => {
                let success = true;
                try {
                    await fetch(site);
                } catch (e) {
                    success = false;
                }
                result.push({value: + success, params: {site}});
            }));
            return result;
        }
    }
];
