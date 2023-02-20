export const CONF = {
    BASE_URL: "http://localhost:3000",
    SEARCH_URL: "http://***REMOVED***:7000",
    MODEL_URL: "https://api-inference.huggingface.co/models/Kdogs/dapt_finetuned_korquad",
    QUERY: {
        commonQuery: "",
        collection: {
            sample: {
                id: "sample",
                collectionId: "sports",
                synonymExpansion: 1,
                useSynonym: 1,
                useLa: 1,
                similarity: "bm25",
                searchField: [
                    "title",
                    "content"
                ],
                documentField: [
                    "DOCID",
                    "title",
                    "content"
                ],
                paging: {
                    "from": 0,
                    "size": 1
                }
            }
        }
    }
}