<template>
    <div>
        <nav class="navig animated fadeInDown">
        <ul>
          <li><g-link class="" to="/">ОСПО</g-link></li>
          <li><g-link class="" to="/more">О Нас</g-link></li>
          <li><g-link class="" to="/tech">Контакты</g-link></li>
        </ul>
      </nav>
    </div>
</template>

<script>
export default {
    name: 'Navig'
}
</script>

<style scoped>

.navig ul {
   padding:0;
   margin:0;
   display: flex;
   flex-flow: row;
   list-style: none;
   justify-content:center;
}

.navig ul li {
  margin-right: 0.5rem;
 }

.navig ul li a {
  text-transform:uppercase;
  text-decoration:none;
  padding:0.3em 1em;
 }
    
</style>