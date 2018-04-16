<template>
    <div class="row">
       <header class="text-warning">
           <slot name="header"></slot>
       </header>
       <main>
           <slot></slot>
       </main>
       <footer>
           <slot name="footer"></slot>
       </footer>
    </div>
</template>