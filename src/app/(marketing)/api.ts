const API_URL = process.env.NEXT_PUBLIC_APP_API_URL;

export async function checkQRCodeAPI(code: string) {
  try {
    const res = await fetch(API_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query checkCode(
 $where: KOLCodeWhereInput!
){
  checkCode(
 		where: $where
  ){
    kolName
    code
    discount
  }
}
`,
        variables: {
          where: {
            code: code,
          },
        },
      }),
    });

    if (res.status === 200) {
      return res?.json();
    } else return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function saveTransctionHistory(
  walletAddress: string,
  introCode: string,
  transactionId: string
) {
  try {
    const res = await fetch(API_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `mutation createNTFHistory(
	$data: CreateNTFHistoryInput!	
){
  createNTFHistory(
  data: $data
 
  ){
    __typename
    ... on NTFHistory {
    	walletAddress
      introCode
      transactionId
      ntfHistoryStatus
    }
    ... on CommonError{      
      status
      code
    }
  }

}
`,
        variables: {
          data: {
            // code: code,
          },
        },
      }),
    });

    if (res.status === 200) {
      return res?.json();
    } else return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
