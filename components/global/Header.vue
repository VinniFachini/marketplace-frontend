<template>
  <header class="header">
    <div class="first-bar">
        <div class="container grid-container">
            <div class="logo-section">
                <NuxtLink to="/">
                    <img src="~/assets/images/logo.svg">
                </NuxtLink>
            </div>
            <div class="search-section">
                <Search />
            </div>
            <div class="user-section">
                <Button label="Contato" variant="secondary"/>
                <Cart />
            </div>
        </div>
    </div>
    <div class="second-bar">
        <div class="categories"></div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.grid-container {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 2fr 1fr;
}

.header {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100dvw;
    height: 140px;
    .first-bar {
        background-color: #f83a53;
        min-height: 100px;
        z-index: 10;
        .logo-section {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
        }
        .user-section {
            display: flex;
            align-items: center;
            justify-content: end;
        }
    }
    .second-bar {
        min-height: 40px;
        box-shadow: 0px 0px 16px -7px rgba(0,0,0,0.75);
    }
}
</style>