import axios from "axios";

const inference_url = `https://api-inference.huggingface.co/models/Kdogs/dapt_finetuned_korquad`
const search_url = `http://***REMOVED***:7000/search`
const token = `Bearer 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`
const search_api = async (question, domain) => {
    try {
        let search_list = []
        question = [`축구 인생 은퇴`]
        domain = "sports"
        for(let i = 0; i < question.length; i++){
            const query = {
                'commonQuery': question[i],
                'collection': {
                    'sample': {
                        'id': "sample",
                        'collectionId': "sports",
                        'synonymExpansion': 1,
                        'useSynonym': 1,
                        'useLa': 1,
                        'similarity': "bm25",
                        'searchField': [
                            "title",
                            "content"
                        ],
                        'documentField': [
                            "DOCID",
                            "title",
                            "content"
                        ],
                        'paging': {
                            "from": 0,
                            "size": 1
                        }
                    }
                }
            }
            const article = await axios.post(search_url, query);
            search_list.push(article)
        }
        console.log(search_list);
        return question, search_list
    } catch (error) {
        console.log(error);
    } finally {
        console.log("finally!")
    }
};

const inference_api = async (question, context) => {
    try {
        let inference = []
        question = [`대한민국 축구 감독은?`]
        context = [`축구협회는 28일 2022 카타르월드컵 조별리그 H조 2차전 가나와 경기에 앞서 “어제 경기 전 공식기자회견에서 발생한 통역 오역과 관련하여, 협회에서는 피파미디어운영 관련 담당자에게 재발방지를 촉구하는 항의메일을 어제 오후에 발송했다”면서 “이에 대해 피파측에서도 공식 통역은 미디어 운영에 있어 매우 중요한 요소인 만큼 유사한 사태가 발생하지 않도록 필요한 조처를 하겠다고 밝혀왔다”고 했다.
        전날(27일) 카타르 도하의 대회 메인미디어센터(MMC)에서 진행된 한국, 가나 두 팀 감독·선수 공식기자회견에는 영어, 포르투갈어를 한국어로 통역하는 동시 통역사가 참석자들의 말을 엉망으로 통역해 물의를 빚었다. 특히 한국 대표팀과 관련해서는 중앙 수비수 김민재의 장딴지 부상과 관련해 묻는 질문에 “경기 출전이 불가능하다”는 식으로 통역했다가 파울루 벤투 감독이 “통역을 잘못한 것 같다. 김민재는 내일 상태를 보고 출전을 결정하겠다”고 정정하는 촌극이 빚어졌다.`]
        for(let i = 0; i < question.length; i++){
            const query = {
                inputs: {
                    context: context[i],
                    question: question[i]
                },
                parameters: {
                    "top_k": 1
                }
            }
            const guess = await axios.post(inference_url, query, { headers: {Authorization: token} });
            inference.push(guess['data'])
        }
        console.log(inference);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("finally!")
    }
};
search_api();

export default {search_api, inference_api};