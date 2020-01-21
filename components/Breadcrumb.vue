<template>
  <ul class="bread-crumb">
      <li>
          <i class="fas fa-home"></i>
      </li>
      <li>
          /
      </li>
      <li>
          {{ type }}
      </li>
      <li>
          /
      </li>
      <li>
          {{ currentpage }}
      </li>
  </ul>
</template>

<script>
export default {
    props: [
        'type',
        'currentpage'
    ]
}
</script>

<style>

</style>