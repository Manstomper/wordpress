<div style="max-width: 1000px; margin: 0 auto;">

    <!-- Vue single file components -->
    <div id="sample-app"></div>

    <!-- Vue basics -->
    <div id="sample-app2">

        <!-- PNG logo from JS using Vue -->
        <img :src="logo" alt="Logo">

        <!-- Background image set in main.scss -->
        <div id="sample-image"></div>

        <!-- WordPress category list -->
        <ul>
            <li v-for="category in categories">
                <a :href="category.link">
                    {{ category.name }}
                </a>
            </li>
        </ul>

        <!-- Fontello icons -->
        <ul>
            <li><a href="#"><span class="icon-facebook"></span> Facebook</a></li>
            <li><a href="#"><span class="icon-twitter"></span> Twitter</a></li>
        </ul>

    </div>

</div>