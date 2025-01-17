/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { NetworkFabrics } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureNetworkFabricManagementServiceAPI } from "../azureNetworkFabricManagementServiceAPI";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  NetworkFabric,
  NetworkFabricsListByResourceGroupNextOptionalParams,
  NetworkFabricsListByResourceGroupOptionalParams,
  NetworkFabricsListByResourceGroupResponse,
  NetworkFabricsListBySubscriptionNextOptionalParams,
  NetworkFabricsListBySubscriptionOptionalParams,
  NetworkFabricsListBySubscriptionResponse,
  NetworkFabricsCreateOptionalParams,
  NetworkFabricsCreateResponse,
  NetworkFabricsGetOptionalParams,
  NetworkFabricsGetResponse,
  NetworkFabricPatchParameters,
  NetworkFabricsUpdateOptionalParams,
  NetworkFabricsUpdateResponse,
  NetworkFabricsDeleteOptionalParams,
  NetworkFabricsProvisionOptionalParams,
  NetworkFabricsProvisionResponse,
  NetworkFabricsDeprovisionOptionalParams,
  NetworkFabricsDeprovisionResponse,
  NetworkFabricsListByResourceGroupNextResponse,
  NetworkFabricsListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing NetworkFabrics operations. */
export class NetworkFabricsImpl implements NetworkFabrics {
  private readonly client: AzureNetworkFabricManagementServiceAPI;

  /**
   * Initialize a new instance of the class NetworkFabrics class.
   * @param client Reference to the service client
   */
  constructor(client: AzureNetworkFabricManagementServiceAPI) {
    this.client = client;
  }

  /**
   * List all the Network Fabric resources in the given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: NetworkFabricsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<NetworkFabric> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: NetworkFabricsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<NetworkFabric[]> {
    let result: NetworkFabricsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: NetworkFabricsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<NetworkFabric> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all the Network Fabric resources in the given subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: NetworkFabricsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<NetworkFabric> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: NetworkFabricsListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<NetworkFabric[]> {
    let result: NetworkFabricsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: NetworkFabricsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<NetworkFabric> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Create Network Fabric resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    networkFabricName: string,
    body: NetworkFabric,
    options?: NetworkFabricsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkFabricsCreateResponse>,
      NetworkFabricsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkFabricsCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, networkFabricName, body, options },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkFabricsCreateResponse,
      OperationState<NetworkFabricsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create Network Fabric resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    body: NetworkFabric,
    options?: NetworkFabricsCreateOptionalParams
  ): Promise<NetworkFabricsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      networkFabricName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get Network Fabric resource details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkFabricsGetOptionalParams
  ): Promise<NetworkFabricsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkFabricName, options },
      getOperationSpec
    );
  }

  /**
   * Update certain properties of the Network Fabric resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric
   * @param body Network Fabric properties to update.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    networkFabricName: string,
    body: NetworkFabricPatchParameters,
    options?: NetworkFabricsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkFabricsUpdateResponse>,
      NetworkFabricsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkFabricsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, networkFabricName, body, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkFabricsUpdateResponse,
      OperationState<NetworkFabricsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update certain properties of the Network Fabric resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric
   * @param body Network Fabric properties to update.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    body: NetworkFabricPatchParameters,
    options?: NetworkFabricsUpdateOptionalParams
  ): Promise<NetworkFabricsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      networkFabricName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete Network Fabric resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkFabricsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, networkFabricName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete Network Fabric resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkFabricsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      networkFabricName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List all the Network Fabric resources in the given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: NetworkFabricsListByResourceGroupOptionalParams
  ): Promise<NetworkFabricsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * List all the Network Fabric resources in the given subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: NetworkFabricsListBySubscriptionOptionalParams
  ): Promise<NetworkFabricsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Provisions the underlying resources in the given Network Fabric instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the NetworkFabric.
   * @param options The options parameters.
   */
  async beginProvision(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkFabricsProvisionOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkFabricsProvisionResponse>,
      NetworkFabricsProvisionResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkFabricsProvisionResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, networkFabricName, options },
      spec: provisionOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkFabricsProvisionResponse,
      OperationState<NetworkFabricsProvisionResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Provisions the underlying resources in the given Network Fabric instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the NetworkFabric.
   * @param options The options parameters.
   */
  async beginProvisionAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkFabricsProvisionOptionalParams
  ): Promise<NetworkFabricsProvisionResponse> {
    const poller = await this.beginProvision(
      resourceGroupName,
      networkFabricName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deprovisions the underlying resources in the given Network Fabric instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the NetworkFabric.
   * @param options The options parameters.
   */
  async beginDeprovision(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkFabricsDeprovisionOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkFabricsDeprovisionResponse>,
      NetworkFabricsDeprovisionResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkFabricsDeprovisionResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, networkFabricName, options },
      spec: deprovisionOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkFabricsDeprovisionResponse,
      OperationState<NetworkFabricsDeprovisionResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deprovisions the underlying resources in the given Network Fabric instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the NetworkFabric.
   * @param options The options parameters.
   */
  async beginDeprovisionAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkFabricsDeprovisionOptionalParams
  ): Promise<NetworkFabricsDeprovisionResponse> {
    const poller = await this.beginDeprovision(
      resourceGroupName,
      networkFabricName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: NetworkFabricsListByResourceGroupNextOptionalParams
  ): Promise<NetworkFabricsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: NetworkFabricsListBySubscriptionNextOptionalParams
  ): Promise<NetworkFabricsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkFabric
    },
    201: {
      bodyMapper: Mappers.NetworkFabric
    },
    202: {
      bodyMapper: Mappers.NetworkFabric
    },
    204: {
      bodyMapper: Mappers.NetworkFabric
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body26,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkFabricName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkFabric
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkFabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkFabric
    },
    201: {
      bodyMapper: Mappers.NetworkFabric
    },
    202: {
      bodyMapper: Mappers.NetworkFabric
    },
    204: {
      bodyMapper: Mappers.NetworkFabric
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body27,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkFabricName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkFabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkFabricsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkFabrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkFabricsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const provisionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/provision",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.NetworkFabricsProvisionHeaders
    },
    201: {
      headersMapper: Mappers.NetworkFabricsProvisionHeaders
    },
    202: {
      headersMapper: Mappers.NetworkFabricsProvisionHeaders
    },
    204: {
      headersMapper: Mappers.NetworkFabricsProvisionHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkFabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deprovisionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/deprovision",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.NetworkFabricsDeprovisionHeaders
    },
    201: {
      headersMapper: Mappers.NetworkFabricsDeprovisionHeaders
    },
    202: {
      headersMapper: Mappers.NetworkFabricsDeprovisionHeaders
    },
    204: {
      headersMapper: Mappers.NetworkFabricsDeprovisionHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkFabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkFabricsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkFabricsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
