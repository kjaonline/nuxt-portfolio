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
          {{ slug }}
      </li>
  </ul>
</template>

<script>
export default {
    props: [
        'type',
        'slug'
    ]
}
</script>

<style>

</style>