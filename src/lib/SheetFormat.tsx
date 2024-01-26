// or i can use not to check whole word but most of it

export const sheetDataLevel = [
    {
        at: 0,
        param: 'Product category '
    },
    {
        at: 1,
        param: "Vendor "
    },
    {
        at: 2,
        param: "SKU name "
    },
    {
        at: 1,
        param: "Form factor "
    },
    {
        at: 1,
        param: "Metrics tracked"
    },
    {
        at: 1,
        param: "Pricing"
    },
    {
        at: 1,
        param: "CE Certification"
    },
    {
        at: 1,
        param: "Battery life "
    },
    {
        at: 1,
        param: "iOS compatible "
    },
    {
        at: 1,
        param: "Android compatible "
    },
]

export function getIndexOfFeature(feature:string, data: (string | number)[][] | undefined) {
    if(!data){
        return undefined
    }
    for(let i=0; i<data.length; i++){
        //@ts-ignore
        if(data[i][0].toLowerCase().trim() == feature.toLowerCase().trim()){
            return data[i];
        }
    }

}