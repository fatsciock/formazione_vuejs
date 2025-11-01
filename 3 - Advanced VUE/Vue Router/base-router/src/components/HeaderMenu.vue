<template>
	<header>
		<nav>
			<router-link to="/" exact>Home</router-link>
			<router-link to="/about">Chi Siamo</router-link>
			<router-link to="/users">Utenti</router-link>
		</nav>
	</header>
</template>

<style scoped>
header {
	background: linear-gradient(90deg, #2563eb, #4f46e5);
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

nav {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	padding: 1rem 0;
}

a {
	color: white;
	font-weight: 500;
	text-decoration: none;
	position: relative;
	transition: color 0.2s ease-in-out;
}

a::after {
	content: '';
	position: absolute;
	bottom: -4px;
	left: 0;
	width: 0%;
	height: 2px;
	background-color: #facc15;
	transition: width 0.3s ease;
}

a:hover {
	color: #facc15;
}

a:hover::after {
	width: 100%;
}

.router-link-active {
	color: #facc15;
}

.router-link-active::after {
	width: 100%;
}
</style>
