export const metrics = [
    {
        name: "time_fetch_google",
        type: "gauge",
        description: "How many nanoseconds a fetch to google takes",
        collect: async () => {
            const startTime = process.hrtime.bigint();
            
            await fetch("https://8.8.8.8", {follow: "manual"});

            const endTime = process.hrtime.bigint();

            return endTime - startTime;
        }
    },
    {
        name: "time_fetch_cloudflare",
        type: "gauge",
        description: "How many nanoseconds a fetch to cloudflare takes",
        collect: async () => {
            const time = (new Date()).getTime();
            const domain = `${time}.vercel.app`;
            const startTime = process.hrtime.bigint();
            
            await fetch("https://1.1.1.1", {follow: "manual"});

            const endTime = process.hrtime.bigint();

            return endTime - startTime;
        }
    },
];
