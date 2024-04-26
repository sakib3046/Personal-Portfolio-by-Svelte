<script>
  import LineProgBar from "./aboutComponent/lineProgBar.svelte";
import SkillCard from "./aboutComponent/skillCard.svelte";

</script>
<div class="mt-[40px] sm:mt-[50px] md:mt-[60px] p-4 bg-white/30 backdrop-blur-sm shadow-xl rounded-lg " id="about">

    <div class="md:grid grid-cols-6 gap-4">
        <div class="col-span-4 flex flex-col items-center bg-white/50 backdrop-blur-sm shadow-xl rounded-lg p-4">
            <div class="text-600 font-bold text-2xl">Something About Me</div>
                <div class=" px-3 md:px-6 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ex perspiciatis error repellendus assumenda expedita, ducimus porro iusto libero vero dignissimos dolor eaque? Atque quam impedit minima saepe at laboriosam?
                </div>
        </div>
        <div class="col-span-2">
            <div class="h-full col-span-4 flex flex-col items-center bg-orange backdrop-blur-sm shadow-xl rounded-lg p-4 mt-4 md:mt-0">
                <div class="text-white font-bold text-2xl">
                    MY CV
                </div>
                <button>
                    <div class=" flex flex-row text-xl font-bold p-2 border-2 hover:bg-500 rounded-sm text-center justify-center">
                        <i class="fa-solid fa-download p-1 text-white"></i>
                        <h1 class="p-1 text-white">DOWNLOAD</h1>
                    </div>
                </button>
            </div>
            
        </div>
    </div>
    <div class=" text-center font-bold text-xl sm:text-4xl md:text-4xl p-2 sm:p-4 mt-2">My Skills</div>
    <div class="grid grid-cols-2 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
        <SkillCard percentage={90} skillName='HTML & CSS'/>
        <SkillCard percentage={88} skillName='Javascript'/>
        <SkillCard percentage={80} skillName='Typescript'/>
        <SkillCard percentage={92} skillName='Adobe Photoshop'/>
        <SkillCard percentage={82} skillName='Adobe Illustrator'/>
        <SkillCard percentage={80} skillName='Figma'/>
        <div class="rounded-xl  col-span-2 xl:col-span-4 md:col-span-2 sm:col-span-3 m-auto">
            <div class="grid sm:grid-cols-3 m-auto p-6 bg-white/50 backdrop-blur-sm shadow-xl rounded-lg mx-4">
                <div class=" m-auto text-2xl xl:text-4xl p-2 font-bold"> My  Other Important Skills</div>
                <div class="col-span-2">
                    <LineProgBar percentage={95} skillName="Leadership"/>
                    <LineProgBar percentage={85} skillName="Communication"/>
                    <LineProgBar percentage={90} skillName="Teamwork"/>
                    <LineProgBar percentage={92} skillName="Flexibility"/>
                </div>
            </div>

        </div>
    </div>

 

</div>


<!-- 
    about my selfe
    cv
    skill
    SERVICES I OFFER
    experience
    review => card
    education

 -->