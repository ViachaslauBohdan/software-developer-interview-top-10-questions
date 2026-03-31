export const technology = 'react' as const;
export const level = 'senior' as const;
export const question = "How do you decide boundaries between client state, server state, and URL state?" as const;

export function answer(): string {
  return "Store each state type where it naturally belongs: local UI in component, remote cache in query layer, navigation state in URL.";
}

export function shortExample(): string {
  return "const [panelOpen, setPanelOpen] = useState(false); // client state\nconst { data } = useQuery({ queryKey: ['orders'], queryFn: fetchOrders }); // server state\nrouter.push(`?tab=${tab}`); // URL state";
}
