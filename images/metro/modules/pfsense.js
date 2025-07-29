const { PFSENSE_API_URL, PFSENSE_AUTH } = process.env;

export const metrics = [
    {
        name: "pfsense_dhcp_leases_per_subnet",
        type: "gauge",
        description: "The amount of DHCP leases issued per subnet",
        collect: async () => {
            const r = await fetch(`${PFSENSE_API_URL}/services/dhcpd/lease`, {headers: {Authorization: PFSENSE_AUTH}});

            const response = await r.json();
            if (r.status !== 200) {
                throw new Error(response);
            }
            const leases = response.data;
            const leaseCount = {};

            leases.forEach(lease => {
                if (lease.type === "static") {
                    return;
                }
                if (lease.state === "expired") {
                    return;
                }
                let subnet = lease.ip.replace(/\.\d+$/, "") + ".0";
                leaseCount[subnet] = (leaseCount[subnet] || 0) + 1;
            });
            const metrics = Object.keys(leaseCount).map(subnet => {
                return {
                    value: leaseCount[subnet],
                    params: {
                        subnet
                    }
                };
            });
            return metrics;
        }
    },
    {
        name: "pfsense_service_status",
        type: "gauge",
        description: "Service status. 1 is running, 0 is not",
        collect: async () => {
            const r = await fetch(`${PFSENSE_API_URL}/services/`, {headers: {Authorization: PFSENSE_AUTH}});

            const response = await r.json();
            if (r.status !== 200) {
                throw new Error(response);
            }

            const services = response.data;

            return services.map(service => {
                return {
                    value: service.status === "running" ? 1 : 0,
                    params: {
                        service: service.name
                    }
                };
            });

        }
    },
    {
        name: "pfsense_gateway_rtt",
        type: "gauge",
        description: "The RTT to the ISP",
        collect: async () => {
            const r = await fetch(`${PFSENSE_API_URL}/status/gateway`, {headers: {Authorization: PFSENSE_AUTH}});

            const response = await r.json();
            if (r.status !== 200) {
                throw new Error(response);
            }

            const gateways = response.data;

            return gateways.map(gateway => {
                return {
                    value: gateway.delay,
                    params: {
                        name: gateway.name
                    }
                };
            });
        }
    },
    {
        name: "pfsense_gateway_packet_loss",
        type: "gauge",
        description: "The % of packet loss (0-100)",
        collect: async () => {
            const r = await fetch(`${PFSENSE_API_URL}/status/gateway`, {headers: {Authorization: PFSENSE_AUTH}});

            const response = await r.json();
            if (r.status !== 200) {
                throw new Error(response);
            }

            const gateways = response.data;

            return gateways.map(gateway => {
                return {
                    value: gateway.loss,
                    params: {
                        name: gateway.name
                    }
                };
            });
        }
    }
];
