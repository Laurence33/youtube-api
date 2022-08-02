export interface ItemResult {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
}

/**********
    /*******************************
     * {
      "kind": "youtube#searchResult",
      "etag": "SJQJ9kjqjbAqCgszi09JSKryK60",
      "id": {
        "kind": "youtube#video",
        "videoId": "TlB_eWDSMt4"
      }
    },
 */
