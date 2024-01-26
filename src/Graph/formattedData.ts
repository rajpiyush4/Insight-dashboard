type ProductType = {
  title: { text: string };
  data: { type: string; dataPoints: { label: string; y: number }[] }[];
};

type OriginalData = {
  "Product category": string;
  Vendor: string;
  "SKU name": string;
  "Form factor": string;
  "Metrics tracked": string;
  Pricing: number;
  Size: string;
  Weight: string;
  "CE Certification": string;
  "FDA Approved": string;
  "Battery life": string;
  "iOS compatible": string;
  "Android compatible": string;
};

export const formatData = (originalData: OriginalData[] | undefined): ProductType[] => {
  const productTypes: ProductType[] = [];

  originalData?.forEach((product) => {
    const dataPoints: { label: string; y: number }[] = [];
console.log("product", product)
    // Assuming the Pricing is used for y values in the chart
    dataPoints.push({ label: "Pricing", y: product.Pricing });

    // Add more data points as needed, for example, using Size, Weight, etc.

    const productType: ProductType = {
      title: { text: product["Product category"] },
      data: [{ type: "splineArea", dataPoints }],
    };

    productTypes.push(productType);
  });

  console.log("productTypes", productTypes)
  return productTypes;
};

