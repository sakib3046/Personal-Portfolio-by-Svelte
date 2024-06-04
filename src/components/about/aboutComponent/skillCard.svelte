<script lang="ts">
    export let percentage:number;
    export let skillName:string;

</script>

<div class=" m-4 bg-white/50 backdrop-blur-sm shadow-xl rounded-lg flex flex-col justify-center">
    <!-- <div class="h-[150px] w-[150px] bg-red-700 m-auto rounded-full">
        
    </div> -->

        <svg class="w-full h-full p-2" viewBox="0 0 100 100">
          <!-- Background circle -->
          <circle
            class="text-100 stroke-current"
            stroke-width="10"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          <!-- Progress circle -->
          <circle
            class="text-orange  progress-ring__circle stroke-current"
            stroke-width="12"
            stroke-linecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke-dasharray="251.2" 
            stroke-dashoffset="calc(251.2 - (251.2 * {percentage}) / 100)"
          ></circle>
          
          <!-- Center text -->
          <text x="50" y="50" font-family="Dosis" font-size="16" text-anchor="middle" alignment-baseline="middle">{percentage}%</text>
      
        </svg>
        <div class="text-center pb-4 font-bold md:text-lg sm:text-base text-sm">
            {skillName}
        </div>
</div>