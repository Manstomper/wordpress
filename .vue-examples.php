<div style="max-width: 1000px; margin: 0 auto;">

    <div id="shop"></div>

    <div id="events"></div>

    <div id="newest-articles">
        <h2>Newest articles</h2>
        <article v-for="article in articles" :key="article.id">
            <a :href="article.link">
                <h2>{{ article.title.rendered }}</h2>
                <div v-html="article.excerpt.rendered"></div>
            </a>
        </article>

        <button type="button" @click="getArticles" :disabled="isLoading || !hasMoreArticles">
            {{ buttonText }}
        </button>
    </div>

    <div id="examples">
        <h2>Examples</h2>

        <!-- PNG logo from JS using Vue -->
        <img :src="logo" alt="Logo">

        <!-- Background image set in main.scss -->
        <div id="sample-image"></div>

        <!-- Fontello icons -->
        <ul>
            <li><a href="#"><span class="icon-facebook"></span> Facebook</a></li>
            <li><a href="#"><span class="icon-twitter"></span> Twitter</a></li>
        </ul>

    </div>

</div>