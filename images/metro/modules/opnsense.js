const { OPNSENSE_API_URL, OPNSENSE_AUTH } = process.env;

export const metrics = [
    {
        name: "opnsense_dhcp_leases_per_interface",
        type: "gauge",
        description: "The amount of DHCP leases issued per subnet",
        collect: async () => {
            const r = await fetch(`${OPNSENSE_API_URL}/api/services/dhcpd/lease`, {headers: {Authorization: OPNSENSE_AUTH}});

            const response = await r.json();
            if (r.status !== 200) {
                throw new Error(response);
            }
            const leases = response.rows;
            const interfaceNameToLeaseCount = {};
            const now = Date.now() / 1000;

            leases.forEach(lease => {
                const isStatic = lease.is_reserved.length !== 0;
                if (isStatic) {
                    return;
                }
                if (now > lease.expire) {
                    return;
                }
                interfaceNameToLeaseCount[lease.if_name] = (interfaceNameToLeaseCount[lease.if_name] ?? 0) + 1;
            });
            const metrics = Object.keys(interfaceNameToLeaseCount).map(interface_name => {
                return {
                    value: interfaceNameToLeaseCount[interface_name],
                    params: {
                        interface_name
                    }
                };
            });
            return metrics;
        }
    },
    {
        name: "opnsense_service_status",
        type: "gauge",
        description: "Service status. 1 is running, 0 is not",
        collect: async () => {
            const r = await fetch(`${OPNSENSE_API_URL}/api/core/service/search`, {headers: {Authorization: OPNSENSE_AUTH}});

            const response = await r.json();
            if (r.status !== 200) {
                throw new Error(response);
            }

            const services = response.data;

            return services.map(service => {
                return {
                    value: service.running,
                    params: {
                        id: service.id,
                        name: service.name,
                    }
                };
            });

        }
    },
    {
    	name: "opnsense_gateway_rtt",
    	type: "gauge",
    	description: "The RTT to the ISP",
    	collect: async () => {
    		const r = await fetch(`${OPNSENSE_API_URL}/api/routing/settings/searchGateway`, { headers: { Authorization: OPNSENSE_AUTH }});
    
    		const repsonse = await r.json();
    		if (r.status !== 200) {
    			throw new Error(response);
    		}
    
    		const gateways = response.data.rows;
    
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
    	name: "opnsense_gateway_packet_loss",
    	type: "gauge",
    	description: "The % of packet loss (0-100)",
    	collect: async () => {
    		const r = await fetch(`${OPNSENSE_API_URL}/api/routing/settings/searchGateway`, { headers: { Authorization: OPNSENSE_AUTH}});
    		
    		const repsonse = await r.json();
    		if (r.status !== 200) {
    			throw new Error(response);
    		}
    
    		const gateways = response.data.rows;
    
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
