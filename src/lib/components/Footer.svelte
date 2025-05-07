<script>
    import { BottomNav, BottomNavItem } from 'flowbite-svelte';
    import { HomeSolid, InfoCircleOutline, AdjustmentsVerticalOutline } from 'flowbite-svelte-icons';
    import { base } from '$app/paths';
    import { page } from '$app/state';

    let activeUrl = $derived(page.url.pathname);
</script>

<footer>
    <BottomNav {activeUrl} innerClass="grid-cols-3">
        <BottomNavItem btnName="Home" href="{base}/">
            <HomeSolid />
        </BottomNavItem>
        <BottomNavItem btnName="Setting" href="{base}/setting">
            <AdjustmentsVerticalOutline />
        </BottomNavItem>
        <BottomNavItem btnName="About" href="{base}/about">
            <InfoCircleOutline />
        </BottomNavItem>
    </BottomNav>
</footer>

<style>
    /* nothing */
</style>
