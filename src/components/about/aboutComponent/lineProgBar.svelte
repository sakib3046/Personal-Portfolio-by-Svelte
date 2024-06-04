<script lang="ts">
    export let percentage:number;
    export let skillName:string;
</script>
<div class="flex justify-between w-full py-2">
    <span class="text-xl font-medium text-950">{skillName}</span>
    <span class="text-xl font-medium text-950">{percentage}%</span>
  </div>
  <div class="w-full bg-100 rounded-full h-2.5">
    <div class="bg-orange h-2.5 rounded-full" style="width: {percentage}%"></div>
  </div>