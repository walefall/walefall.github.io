var posts=["2024/09/05/GCN/","2024/09/05/GAT/","2024/09/05/GraphSAGE/","2024/09/05/注意力机制/","2024/09/05/hello-world/","2024/09/04/页面手册/","2024/09/05/生成式时间序列/","2024/09/05/TGCN/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };