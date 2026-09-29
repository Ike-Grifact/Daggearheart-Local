(async()=>{
  const boot=document.getElementById('boot');
  try{
    if(typeof DecompressionStream==='undefined') throw new Error('Este navegador não oferece suporte à descompressão local necessária para esta versão. Use Chrome, Edge, Firefox ou Safari atualizados.');
    const b64=window.__IKHE_BUNDLE__||'';
    const bin=atob(b64);
    const bytes=new Uint8Array(bin.length);
    for(let i=0;i<bin.length;i++) bytes[i]=bin.charCodeAt(i);
    const ds=new DecompressionStream('gzip');
    const text=await new Response(new Blob([bytes]).stream().pipeThrough(ds)).text();
    window.__IKHE_BUNDLE__='';
    document.open(); document.write(text); document.close();
  }catch(err){
    console.error(err);
    boot.innerHTML='<div class="mark">✦</div><h1>IKHE — Ficha Viva</h1><p class="error"></p>';
    boot.querySelector('.error').textContent=err?.message||'Falha ao carregar o aplicativo.';
  }
})();
