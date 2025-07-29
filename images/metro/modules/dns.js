import dns from "node:dns/promises";

export const metrics = [
    {
        name: "dns_cache_hit",
        type: "gauge",
        description: "How many nanoseconds a DNS cache hit to google.com takes",
        collect: async () => {
            const startTime = process.hrtime.bigint();
            
            await dns.lookup("google.com");

            const endTime = process.hrtime.bigint();

            return endTime - startTime;
        }
    },
    {
        name: "dns_cache_miss",
        type: "gauge",
        description: "How many nanoseconds a DNS cache miss to *.vercel.app takes",
        collect: async () => {
            const time = (new Date()).getTime();
            const domain = `${time}.vercel.app`;
            const startTime = process.hrtime.bigint();
            
            await dns.lookup(domain);

            const endTime = process.hrtime.bigint();

            return endTime - startTime;
        }
    },
];
