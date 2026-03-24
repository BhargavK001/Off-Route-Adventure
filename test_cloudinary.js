const c = require('cloudinary').v2;

c.config({
    cloud_name: 'dlgjwovla',
    api_key: '974979219356865',
    api_secret: 'Me5lre2SzRasa5OQHK62zu15pUs'
});

async function test() {
    try {
        // Try Search API with asset_folder
        console.log('=== SEARCH with asset_folder: Andharban ===');
        const result = await c.search
            .expression('asset_folder:Andharban')
            .max_results(5)
            .execute();
        console.log('Found:', result.total_count, 'total images');
        result.resources.forEach(r => {
            console.log('  - public_id:', r.public_id);
            console.log('    secure_url:', r.secure_url);
            console.log('    asset_folder:', r.asset_folder);
        });

        // Try another folder
        console.log('\n=== SEARCH with asset_folder: Hampi ===');
        const result2 = await c.search
            .expression('asset_folder:Hampi')
            .max_results(5)
            .execute();
        console.log('Found:', result2.total_count, 'total images');
        result2.resources.forEach(r => {
            console.log('  - public_id:', r.public_id);
            console.log('    asset_folder:', r.asset_folder);
        });
    } catch (e) {
        console.error('ERROR:', e.error ? e.error.message : JSON.stringify(e, null, 2));
    }
}

test();
