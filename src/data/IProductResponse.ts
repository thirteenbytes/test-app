import { UniqueIdentifier } from "@dnd-kit/core";

export interface IProductResponse {
    Id: UniqueIdentifier,
    Code: string,
    Name: string,
    Description: string,
    Weight: number,
    WeightUom: string,
    Label: string,
    IsActive: boolean
}