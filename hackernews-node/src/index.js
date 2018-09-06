const {GraphQLServer}=require('graphql-yoga');

let links=[{
    id:'link-0',
    url:'www.aszx-fyh.top',
    description:'my web site'
},{
    id:'link-1',
    url:'www.baidu.com',
    description:'百度'
}];

let idCount=links.length;
const resolvers={
    Query:{
        user:()=>{
            return {id:1,name:'fyh'};
        },
        feed:()=>links,
        link:(root,args)=>{
            return links.find(link=>{
                return link.id===args.id;
            })
        },
        getcsk:()=>{
            return {name:links[1]};
        }
    },
    Mutation:{
        post:(root,args)=>{
            const link={
                id:`link-${idCount++}`,
                description:args.description,
                url:args.url
            };
            links.push(link);
            return link;
        },
        updateLink(root,args){
           let link= links.find(link=>{
                return link.id===args.id;
            });
            if(link){
                link.url=args.url;
                link.description=args.description;
            }
            return link;
        },
        deleteLink(root,args){
           let index= links.findIndex(link=>{
                return link.id===args.id;
            });
            let link=links[index];
            if(index>-1){
                links.splice(index,1);
            }
            
            return link;
        },
        
    },
    Link:{
        id: (root) => root.id,
        description: (root) => root.description,
        url: (root) => root.url,
    },
    csk:{
        name:(root)=> console.log(root)
    },
    cs:{}
};

const server=new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers,
});

server.start(()=>{
    console.log(`Server is running on http://localhost:4000`)
});
