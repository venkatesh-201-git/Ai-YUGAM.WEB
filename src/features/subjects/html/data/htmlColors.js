export const htmlColors = {
  id: 'colors',
  title: 'HTML Colors',
  content: `
    <p>HTML colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
       <div class="h-20 bg-tomato rounded-2xl flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-red-500/20" style="background-color: Tomato;">Tomato</div>
       <div class="h-20 bg-orange rounded-2xl flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-orange-500/20" style="background-color: Orange;">Orange</div>
       <div class="h-20 bg-dodgerblue rounded-2xl flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-500/20" style="background-color: DodgerBlue;">Blue</div>
       <div class="h-20 bg-mediumseagreen rounded-2xl flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-emerald-500/20" style="background-color: MediumSeaGreen;">Green</div>
    </div>
  `,
  codeExample: `<h2 style="background-color:Tomato; color:white;">Tomato Color</h2>
<h2 style="background-color:DodgerBlue; color:white;">DodgerBlue Color</h2>`
};
