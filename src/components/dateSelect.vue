<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          
        },
        value: '',
      };
    }
  };
</script>