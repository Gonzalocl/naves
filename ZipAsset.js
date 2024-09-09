class ZipAsset {
    url;
    assetsPromise;
    assets = undefined;

    constructor(url) {
        this.url = url;
        this.assetsPromise = this.loadAssets(this.url);
        this.assetsPromise.then((zip) => {
            this.assets = zip;
        });
    }

    loadAssets(url) {
        return fetch(url)
            .then((response) => {
                if (response.status === 200 || response.status === 0) {
                    return Promise.resolve(response.blob());
                } else {
                    console.error("Error downloading: " + url);
                }
            })
            .then(JSZip.loadAsync);
    }

    async getAssetObjectURL(path) {
        if (!this.assets) {
            await this.assetsPromise;
        }

        let assetBlob = await this.assets.file(path).async("blob");
        return URL.createObjectURL(assetBlob);
    }
}
