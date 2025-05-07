<script>
    import logo from '$lib/images/fate-logo.webp';
</script>

<header class="page-title rounded-md border border-gray-200 bg-gray-50 p-3 shadow-md">
    <div class="corner">
        <img src={logo} alt="FateLogo" />
    </div>

    <div class="page-title">
        <h1>
            <small class="text-sm italic">Fate/DGW</small>
            <small class="text-lg">拡張サーヴァント割り当てツール</small>
        </h1>
    </div>

    <div class="corner">
        <img src={logo} alt="FateLogo" />
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4em;
    }

    .corner {
        width: 3em;
        height: max-content;
    }

    .page-title {
        text-align: center;

        h1 {
            color: #333;

            & > * {
                display: block;
            }
        }
    }
</style>
