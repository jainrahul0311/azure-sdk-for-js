## API Report File for "@azure/communication-job-router"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference lib="esnext.asynciterable" />

import { CommonClientOptions } from '@azure/core-client';
import { CommunicationTokenCredential } from '@azure/communication-common';
import * as coreClient from '@azure/core-client';
import { KeyCredential } from '@azure/core-auth';
import { OperationOptions } from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { TokenCredential } from '@azure/core-auth';

// @public
export interface AcceptJobOfferResponse {
    assignmentId: string;
    jobId: string;
    workerId: string;
}

// @public
export interface BestWorkerMode extends DistributionMode {
    kind: "best-worker";
    scoringRule?: RouterRuleUnion;
    scoringRuleOptions?: ScoringRuleOptions;
}

// @public
export interface CancelExceptionAction extends ExceptionAction {
    dispositionCode?: string;
    kind: "cancel";
    note?: string;
}

// @public
export interface CancelJobOptions extends JobRouterCancelJobActionOptionalParams {
    dispositionCode?: string;
    note?: string;
}

// @public
export interface CancelJobResponse extends Omit<JobRouterCancelJobActionResponse, "body"> {
    body?: JSONValue;
}

// @public
export interface ChannelConfiguration {
    capacityCostPerJob: number;
    maxNumberOfJobs?: number;
}

// @public
export interface ClassificationPolicy {
    fallbackQueueId?: string;
    readonly id?: string;
    name?: string;
    prioritizationRule?: RouterRuleUnion;
    queueSelectors?: QueueSelectorAttachmentUnion[];
    workerSelectors?: WorkerSelectorAttachmentUnion[];
}

// @public
export interface ClassificationPolicyItem {
    classificationPolicy?: ClassificationPolicy;
    etag?: string;
}

// @public (undocumented)
export interface ClassificationPolicyResponse extends ClassificationPolicy {
    // (undocumented)
    readonly id: string;
}

// @public
export interface CloseJobOptions extends JobRouterCloseJobActionOptionalParams {
    closeAt?: Date;
    dispositionCode?: string;
    note?: string;
}

// @public
export interface CloseJobResponse extends Omit<JobRouterCloseJobActionResponse, "body"> {
    body?: JSONValue;
}

// @public
export interface CompleteJobOptions extends JobRouterCompleteJobActionOptionalParams {
    note?: string;
}

// @public
export interface CompleteJobResponse extends Omit<JobRouterCompleteJobActionResponse, "body"> {
    body?: JSONValue;
}

// @public
export interface ConditionalQueueSelectorAttachment extends QueueSelectorAttachment {
    condition: RouterRuleUnion;
    kind: "conditional";
    queueSelectors: RouterQueueSelectorGenerated[];
}

// @public
export interface ConditionalWorkerSelectorAttachment extends WorkerSelectorAttachment {
    condition: RouterRuleUnion;
    kind: "conditional";
    workerSelectors: RouterWorkerSelectorGenerated[];
}

// @public
export interface CreateClassificationPolicyOptions extends JobRouterAdministrationUpsertClassificationPolicyOptionalParams {
    fallbackQueueId?: string;
    name?: string;
    prioritizationRule?: RouterRuleUnion;
    queueSelectors?: QueueSelectorAttachmentUnion[];
    workerSelectors?: WorkerSelectorAttachmentUnion[];
}

// @public
export interface CreateDistributionPolicyOptions extends JobRouterAdministrationUpsertDistributionPolicyOptionalParams {
    mode?: DistributionModeUnion;
    name?: string;
    offerExpiresAfterSeconds?: number;
}

// @public
export interface CreateExceptionPolicyOptions extends JobRouterAdministrationUpsertExceptionPolicyOptionalParams {
    exceptionRules?: {
        [propertyName: string]: ExceptionRule;
    };
    name?: string;
}

// @public
export interface CreateJobOptions extends JobRouterUpsertJobOptionalParams {
    channelId?: string;
    channelReference?: string;
    classificationPolicyId?: string;
    dispositionCode?: string;
    labels?: JSONObject;
    // (undocumented)
    matchingMode?: RouterJobMatchingMode;
    notes?: RouterJobNote[];
    priority?: number;
    queueId?: string;
    requestedWorkerSelectors?: RouterWorkerSelectorGenerated[];
    tags?: JSONObject;
}

// @public
export interface CreateQueueOptions extends JobRouterAdministrationUpsertQueueOptionalParams {
    distributionPolicyId?: string;
    exceptionPolicyId?: string;
    labels?: JSONObject;
    name?: string;
}

// @public
export interface CreateWorkerOptions extends JobRouterUpsertWorkerOptionalParams {
    availableForOffers?: boolean;
    channelConfigurations?: {
        [propertyName: string]: ChannelConfiguration;
    };
    labels?: JSONObject;
    queueAssignments?: JSONObject;
    tags?: JSONObject;
    totalCapacity?: number;
}

// @public
export interface DeclineJobOfferOptions extends JobRouterDeclineJobActionOptionalParams {
    retryOfferAt?: Date;
}

// @public
export interface DeclineJobOfferRequest {
    retryOfferAt?: Date;
}

// @public
export interface DeclineJobOfferResponse extends Omit<JobRouterDeclineJobActionResponse, "body"> {
    body?: JSONValue;
}

// @public
export interface DirectMapRouterRule extends RouterRule {
    kind: "direct-map-rule";
}

// @public
export interface DistributionMode {
    bypassSelectors?: boolean;
    kind: "best-worker" | "longest-idle" | "round-robin";
    maxConcurrentOffers?: number;
    minConcurrentOffers?: number;
}

// @public (undocumented)
export type DistributionModeUnion = DistributionMode | BestWorkerMode | LongestIdleMode | RoundRobinMode;

// @public
export interface DistributionPolicy {
    readonly id?: string;
    mode?: DistributionModeUnion;
    name?: string;
    offerExpiresAfterSeconds?: number;
}

// @public
export interface DistributionPolicyItem {
    distributionPolicy?: DistributionPolicy;
    etag?: string;
}

// @public (undocumented)
export interface DistributionPolicyResponse extends DistributionPolicy {
    // (undocumented)
    readonly id: string;
}

// @public
export interface ExceptionAction {
    kind: "cancel" | "manual-reclassify" | "reclassify";
}

// @public (undocumented)
export type ExceptionActionUnion = ExceptionAction | CancelExceptionAction | ManualReclassifyExceptionAction | ReclassifyExceptionActionGenerated;

// @public
export interface ExceptionPolicy {
    exceptionRules?: {
        [propertyName: string]: ExceptionRule;
    };
    readonly id?: string;
    name?: string;
}

// @public
export interface ExceptionPolicyItem {
    etag?: string;
    exceptionPolicy?: ExceptionPolicy;
}

// @public (undocumented)
export interface ExceptionPolicyResponse extends ExceptionPolicy {
    // (undocumented)
    readonly id: string;
}

// @public
export interface ExceptionRule {
    actions: {
        [propertyName: string]: ExceptionActionUnion;
    };
    trigger: ExceptionTriggerUnion;
}

// @public
export interface ExceptionTrigger {
    kind: "queue-length" | "wait-time";
}

// @public (undocumented)
export type ExceptionTriggerUnion = ExceptionTrigger | QueueLengthExceptionTrigger | WaitTimeExceptionTrigger;

// @public
export interface ExpressionRouterRule extends RouterRule {
    expression: string;
    kind: "expression-rule";
    language?: ExpressionRouterRuleLanguage;
}

// @public
export type ExpressionRouterRuleLanguage = string;

// @public
export interface FunctionRouterRule extends RouterRule {
    credential?: FunctionRouterRuleCredential;
    functionUri: string;
    kind: "azure-function-rule";
}

// @public
export interface FunctionRouterRuleCredential {
    appKey?: string;
    clientId?: string;
    functionKey?: string;
}

// @public (undocumented)
export interface JobMatchingModeGenerated {
    // (undocumented)
    modeType?: JobMatchModeType;
    queueAndMatchMode?: any;
    // (undocumented)
    scheduleAndSuspendMode?: ScheduleAndSuspendMode;
    suspendMode?: any;
}

// @public
export type JobMatchModeType = string;

// @public
export class JobRouterAdministrationClient {
    constructor(connectionString: string, options?: JobRouterAdministrationClientOptions);
    constructor(endpoint: string, credential: KeyCredential | TokenCredential, options?: JobRouterAdministrationClientOptions);
    constructor(endpoint: string, credential: CommunicationTokenCredential, options?: JobRouterAdministrationClientOptions);
    createClassificationPolicy(classificationPolicyId: string, options?: CreateClassificationPolicyOptions): Promise<ClassificationPolicyResponse>;
    createDistributionPolicy(distributionPolicyId: string, options?: CreateDistributionPolicyOptions): Promise<DistributionPolicyResponse>;
    createExceptionPolicy(exceptionPolicyId: string, options?: CreateExceptionPolicyOptions): Promise<ExceptionPolicyResponse>;
    createQueue(queueId: string, options?: CreateQueueOptions): Promise<RouterQueueResponse>;
    deleteClassificationPolicy(classificationPolicyId: string, options?: OperationOptions): Promise<void>;
    deleteDistributionPolicy(distributionPolicyId: string, options?: OperationOptions): Promise<void>;
    deleteExceptionPolicy(exceptionPolicyId: string, options?: OperationOptions): Promise<void>;
    deleteQueue(queueId: string, options?: OperationOptions): Promise<void>;
    getClassificationPolicy(classificationPolicyId: string, options?: OperationOptions): Promise<ClassificationPolicyResponse>;
    getDistributionPolicy(distributionPolicyId: string, options?: OperationOptions): Promise<DistributionPolicyResponse>;
    getExceptionPolicy(exceptionPolicyId: string, options?: OperationOptions): Promise<ExceptionPolicyResponse>;
    getQueue(queueId: string, options?: OperationOptions): Promise<RouterQueueResponse>;
    listClassificationPolicies(options?: ListClassificationPoliciesOptions): PagedAsyncIterableIterator<ClassificationPolicyItem>;
    listDistributionPolicies(options?: ListDistributionPoliciesOptions): PagedAsyncIterableIterator<DistributionPolicyItem>;
    listExceptionPolicies(options?: ListExceptionPoliciesOptions): PagedAsyncIterableIterator<ExceptionPolicyItem>;
    listQueues(options?: ListQueuesOptions): PagedAsyncIterableIterator<RouterQueueItem>;
    updateClassificationPolicy(classificationPolicyId: string, options?: UpdateClassificationPolicyOptions): Promise<ClassificationPolicyResponse>;
    updateDistributionPolicy(distributionPolicyId: string, options?: UpdateDistributionPolicyOptions): Promise<DistributionPolicyResponse>;
    updateExceptionPolicy(exceptionPolicyId: string, options?: UpdateExceptionPolicyOptions): Promise<ExceptionPolicyResponse>;
    updateQueue(queueId: string, options?: UpdateQueueOptions): Promise<RouterQueueResponse>;
}

// @public
export interface JobRouterAdministrationClientOptions extends CommonClientOptions {
}

// @public
export interface JobRouterAdministrationUpsertClassificationPolicyOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface JobRouterAdministrationUpsertDistributionPolicyOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface JobRouterAdministrationUpsertExceptionPolicyOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface JobRouterAdministrationUpsertQueueOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface JobRouterCancelJobActionOptionalParams extends coreClient.OperationOptions {
    dispositionCode?: string;
    note?: string;
}

// @public
export type JobRouterCancelJobActionResponse = {
    body: any;
};

// @public
export class JobRouterClient {
    constructor(connectionString: string, options?: JobRouterClientOptions);
    constructor(endpoint: string, credential: KeyCredential | TokenCredential, options?: JobRouterClientOptions);
    constructor(endpoint: string, credential: CommunicationTokenCredential, options?: JobRouterClientOptions);
    acceptJobOffer(workerId: string, offerId: string, options?: OperationOptions): Promise<AcceptJobOfferResponse>;
    cancelJob(jobId: string, options?: CancelJobOptions): Promise<CancelJobResponse>;
    closeJob(jobId: string, assignmentId: string, options?: CloseJobOptions): Promise<CloseJobResponse>;
    completeJob(jobId: string, assignmentId: string, options?: CompleteJobOptions): Promise<CompleteJobResponse>;
    createJob(jobId: string, options?: CreateJobOptions): Promise<RouterJobResponse>;
    createWorker(workerId: string, options?: CreateWorkerOptions): Promise<RouterWorkerResponse>;
    declineJobOffer(workerId: string, offerId: string, options?: DeclineJobOfferOptions): Promise<DeclineJobOfferResponse>;
    deleteJob(jobId: string, options?: OperationOptions): Promise<void>;
    deleteWorker(workerId: string, options?: OperationOptions): Promise<void>;
    getJob(jobId: string, options?: OperationOptions): Promise<RouterJobResponse>;
    getJobQueuePosition(jobId: string, options?: OperationOptions): Promise<RouterJobPositionDetails>;
    getQueueStatistics(queueId: string, options?: OperationOptions): Promise<RouterQueueStatistics>;
    getWorker(workerId: string, options?: OperationOptions): Promise<RouterWorkerResponse>;
    listJobs(options?: ListJobsOptions): PagedAsyncIterableIterator<RouterJobItem>;
    listWorkers(options?: ListWorkersOptions): PagedAsyncIterableIterator<RouterWorkerItem>;
    reclassifyJob(jobId: string, options?: ReclassifyJobOptions): Promise<ReclassifyJobResponse>;
    unassignJob(jobId: string, assignmentId: string, options?: UnassignJobOptions): Promise<UnassignJobResponse>;
    updateJob(jobId: string, options?: UpdateJobOptions): Promise<RouterJobResponse>;
    updateWorker(workerId: string, options?: UpdateWorkerOptions): Promise<RouterWorkerResponse>;
}

// @public
export interface JobRouterClientOptions extends CommonClientOptions {
    headers?: JSONObject;
}

// @public
export interface JobRouterCloseJobActionOptionalParams extends coreClient.OperationOptions {
    closeAt?: Date;
    dispositionCode?: string;
    note?: string;
}

// @public
export type JobRouterCloseJobActionResponse = {
    body: any;
};

// @public
export interface JobRouterCompleteJobActionOptionalParams extends coreClient.OperationOptions {
    note?: string;
}

// @public
export type JobRouterCompleteJobActionResponse = {
    body: any;
};

// @public
export interface JobRouterDeclineJobActionOptionalParams extends coreClient.OperationOptions {
    declineJobOfferRequest?: DeclineJobOfferRequest;
}

// @public
export type JobRouterDeclineJobActionResponse = {
    body: any;
};

// @public
export interface JobRouterReclassifyJobActionOptionalParams extends coreClient.OperationOptions {
    reclassifyJobRequest?: any;
}

// @public
export type JobRouterReclassifyJobActionResponse = {
    body: any;
};

// @public
export interface JobRouterUnassignJobActionOptionalParams extends coreClient.OperationOptions {
    unassignJobRequest?: UnassignJobRequest;
}

// @public
export interface JobRouterUpsertJobOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface JobRouterUpsertWorkerOptionalParams extends coreClient.OperationOptions {
}

// @public (undocumented)
export interface JSONArray extends ArrayLike<JSONValue> {
}

// @public (undocumented)
export interface JSONObject {
    // (undocumented)
    [key: string]: JSONValue;
}

// @public
export type JSONValue = boolean | number | string | null | JSONArray | JSONObject;

// @public
export enum KnownExpressionRouterRuleLanguage {
    PowerFx = "powerFx"
}

// @public
export enum KnownJobMatchModeType {
    QueueAndMatchMode = "queueAndMatchMode",
    ScheduleAndSuspendMode = "scheduleAndSuspendMode",
    SuspendMode = "suspendMode"
}

// @public
export enum KnownLabelOperator {
    Equal = "equal",
    GreaterThan = "greaterThan",
    GreaterThanEqual = "greaterThanEqual",
    LessThan = "lessThan",
    LessThanEqual = "lessThanEqual",
    NotEqual = "notEqual"
}

// @public
export enum KnownRouterJobStatus {
    Assigned = "assigned",
    Cancelled = "cancelled",
    ClassificationFailed = "classificationFailed",
    Closed = "closed",
    Completed = "completed",
    Created = "created",
    PendingClassification = "pendingClassification",
    PendingSchedule = "pendingSchedule",
    Queued = "queued",
    Scheduled = "scheduled",
    ScheduleFailed = "scheduleFailed",
    WaitingForActivation = "waitingForActivation"
}

// @public
export enum KnownRouterJobStatusSelector {
    Active = "active",
    All = "all",
    Assigned = "assigned",
    Cancelled = "cancelled",
    ClassificationFailed = "classificationFailed",
    Closed = "closed",
    Completed = "completed",
    Created = "created",
    PendingClassification = "pendingClassification",
    PendingSchedule = "pendingSchedule",
    Queued = "queued",
    Scheduled = "scheduled",
    ScheduleFailed = "scheduleFailed",
    WaitingForActivation = "waitingForActivation"
}

// @public
export enum KnownRouterWorkerSelectorStatus {
    Active = "active",
    Expired = "expired"
}

// @public
export enum KnownRouterWorkerState {
    Active = "active",
    Draining = "draining",
    Inactive = "inactive"
}

// @public
export enum KnownRouterWorkerStateSelector {
    Active = "active",
    All = "all",
    Draining = "draining",
    Inactive = "inactive"
}

// @public
export enum KnownScoringRuleParameterSelector {
    JobLabels = "jobLabels",
    WorkerSelectors = "workerSelectors"
}

// @public
export type LabelOperator = string;

// @public
export interface ListClassificationPoliciesOptions extends OperationOptions {
    maxpagesize?: number;
}

// @public
export interface ListDistributionPoliciesOptions extends OperationOptions {
    maxpagesize?: number;
}

// @public
export interface ListExceptionPoliciesOptions extends OperationOptions {
    maxpagesize?: number;
}

// @public
export interface ListJobsOptions extends OperationOptions {
    channelId?: string;
    classificationPolicyId?: string;
    jobStateSelector?: RouterJobStatusSelector;
    maxpagesize?: number;
    queueId?: string;
    scheduledAfter?: Date;
    scheduledBefore?: Date;
}

// @public
export interface ListPageSettings {
    continuationToken?: string | null;
}

// @public
export interface ListQueuesOptions extends OperationOptions {
    maxpagesize?: number;
}

// @public
export interface ListWorkersOptions extends OperationOptions {
    channelId?: string;
    hasCapacity?: boolean;
    maxpagesize?: number;
    queueId?: string;
    status?: RouterWorkerStateSelector;
}

// @public
export interface LongestIdleMode extends DistributionMode {
    kind: "longest-idle";
}

// @public
export interface ManualReclassifyExceptionAction extends ExceptionAction {
    kind: "manual-reclassify";
    priority?: number;
    queueId?: string;
    workerSelectors?: RouterWorkerSelectorGenerated[];
}

// @public
export interface Oauth2ClientCredential {
    clientId?: string;
    clientSecret?: string;
}

// @public
export interface PassThroughQueueSelectorAttachment extends QueueSelectorAttachment {
    key: string;
    kind: "pass-through";
    labelOperator: LabelOperator;
}

// @public
export interface PassThroughWorkerSelectorAttachment extends WorkerSelectorAttachment {
    expiresAfterSeconds?: number;
    key: string;
    kind: "pass-through";
    labelOperator: LabelOperator;
}

// @public (undocumented)
export interface QueueAndMatchMode {
}

// @public
export interface QueueLengthExceptionTrigger extends ExceptionTrigger {
    kind: "queue-length";
    threshold: number;
}

// @public
export interface QueueSelectorAttachment {
    kind: "conditional" | "pass-through" | "rule-engine" | "static" | "weighted-allocation-queue-selector";
}

// @public (undocumented)
export type QueueSelectorAttachmentUnion = QueueSelectorAttachment | ConditionalQueueSelectorAttachment | PassThroughQueueSelectorAttachment | RuleEngineQueueSelectorAttachment | StaticQueueSelectorAttachment | WeightedAllocationQueueSelectorAttachment;

// @public
export interface QueueWeightedAllocation {
    queueSelectors: RouterQueueSelectorGenerated[];
    weight: number;
}

// @public
export interface ReclassifyExceptionAction extends Omit<ReclassifyExceptionActionGenerated, "labelsToUpsert"> {
    labelsToUpsert?: JSONObject;
}

// @public
export interface ReclassifyExceptionActionGenerated extends ExceptionAction {
    classificationPolicyId?: string;
    kind: "reclassify";
    labelsToUpsert?: {
        [propertyName: string]: any;
    };
}

// @public
export interface ReclassifyJobOptions extends JobRouterReclassifyJobActionOptionalParams {
    reclassifyJobRequest?: JSONObject;
}

// @public
export interface ReclassifyJobResponse extends Omit<JobRouterReclassifyJobActionResponse, "body"> {
    body?: JSONValue;
}

// @public
export interface RoundRobinMode extends DistributionMode {
    kind: "round-robin";
}

// @public
export interface RouterJob extends Omit<RouterJobGenerated, "labels" | "tags"> {
    labels?: JSONObject;
    tags?: JSONObject;
}

// @public
export interface RouterJobAssignment {
    assignedAt: Date;
    assignmentId: string;
    closedAt?: Date;
    completedAt?: Date;
    workerId?: string;
}

// @public
export interface RouterJobGenerated {
    readonly assignments?: {
        [propertyName: string]: RouterJobAssignment;
    };
    readonly attachedWorkerSelectors?: RouterWorkerSelectorGenerated[];
    channelId?: string;
    channelReference?: string;
    classificationPolicyId?: string;
    dispositionCode?: string;
    readonly enqueuedAt?: Date;
    readonly id?: string;
    labels?: {
        [propertyName: string]: any;
    };
    // (undocumented)
    matchingMode?: JobMatchingModeGenerated;
    notes?: {
        [propertyName: string]: string;
    };
    priority?: number;
    queueId?: string;
    requestedWorkerSelectors?: RouterWorkerSelectorGenerated[];
    readonly scheduledAt?: Date;
    readonly status?: RouterJobStatus;
    tags?: {
        [propertyName: string]: any;
    };
}

// @public
export interface RouterJobItem {
    etag?: string;
    job?: RouterJobGenerated;
}

// @public (undocumented)
export interface RouterJobMatchingMode extends JobMatchingModeGenerated {
    // (undocumented)
    modeType?: JobMatchModeType;
    // (undocumented)
    queueAndMatchMode?: QueueAndMatchMode;
    // (undocumented)
    scheduleAndSuspendMode?: ScheduleAndSuspendMode;
    // (undocumented)
    suspendMode?: SuspendMode;
}

// @public
export interface RouterJobNote {
    message: string;
    time: Date;
}

// @public
export interface RouterJobOffer {
    capacityCost: number;
    expiresAt?: Date;
    jobId: string;
    offeredAt?: Date;
    offerId: string;
}

// @public
export interface RouterJobPositionDetails {
    estimatedWaitTimeMinutes: number;
    jobId: string;
    position: number;
    queueId: string;
    queueLength: number;
}

// @public (undocumented)
export interface RouterJobResponse extends RouterJob {
    // (undocumented)
    readonly id: string;
}

// @public
export type RouterJobStatus = string;

// @public
export type RouterJobStatusSelector = string;

// @public
export interface RouterQueue extends Omit<RouterQueueGenerated, "labels"> {
    labels?: JSONObject;
}

// @public
export interface RouterQueueGenerated {
    distributionPolicyId?: string;
    exceptionPolicyId?: string;
    readonly id?: string;
    labels?: {
        [propertyName: string]: any;
    };
    name?: string;
}

// @public
export interface RouterQueueItem {
    etag?: string;
    queue?: RouterQueueGenerated;
}

// @public (undocumented)
export interface RouterQueueResponse extends RouterQueue {
    // (undocumented)
    readonly id: string;
}

// @public
export interface RouterQueueSelector extends Omit<RouterQueueSelectorGenerated, "value"> {
    value?: JSONValue;
}

// @public
export interface RouterQueueSelectorGenerated {
    key: string;
    labelOperator: LabelOperator;
    value?: any;
}

// @public
export interface RouterQueueStatistics {
    estimatedWaitTimeMinutes?: {
        [propertyName: string]: number;
    };
    length: number;
    longestJobWaitTimeMinutes?: number;
    queueId: string;
}

// @public
export interface RouterRule {
    kind: "direct-map-rule" | "expression-rule" | "azure-function-rule" | "static-rule" | "webhook-rule";
}

// @public (undocumented)
export type RouterRuleUnion = RouterRule | DirectMapRouterRule | ExpressionRouterRule | FunctionRouterRule | StaticRouterRuleGenerated | WebhookRouterRule;

// @public
export interface RouterWorker extends Omit<RouterWorkerGenerated, "queueAssignments" | "labels" | "tags"> {
    labels?: JSONObject;
    queueAssignments?: JSONObject;
    tags?: JSONObject;
}

// @public
export interface RouterWorkerAssignment {
    assignedAt: Date;
    assignmentId: string;
    capacityCost: number;
    jobId: string;
}

// @public
export interface RouterWorkerGenerated {
    readonly assignedJobs?: RouterWorkerAssignment[];
    availableForOffers?: boolean;
    channelConfigurations?: {
        [propertyName: string]: ChannelConfiguration;
    };
    readonly id?: string;
    labels?: {
        [propertyName: string]: any;
    };
    readonly loadRatio?: number;
    readonly offers?: RouterJobOffer[];
    queueAssignments?: {
        [propertyName: string]: any;
    };
    readonly state?: RouterWorkerState;
    tags?: {
        [propertyName: string]: any;
    };
    totalCapacity?: number;
}

// @public
export interface RouterWorkerItem {
    etag?: string;
    worker?: RouterWorkerGenerated;
}

// @public (undocumented)
export interface RouterWorkerResponse extends RouterWorker {
    // (undocumented)
    readonly id: string;
}

// @public
export interface RouterWorkerSelector extends Omit<RouterWorkerSelectorGenerated, "value"> {
    value?: JSONValue;
}

// @public
export interface RouterWorkerSelectorGenerated {
    expedite?: boolean;
    expiresAfterSeconds?: number;
    readonly expiresAt?: Date;
    key: string;
    labelOperator: LabelOperator;
    readonly status?: RouterWorkerSelectorStatus;
    value?: any;
}

// @public
export type RouterWorkerSelectorStatus = string;

// @public
export type RouterWorkerState = string;

// @public
export type RouterWorkerStateSelector = string;

// @public
export interface RuleEngineQueueSelectorAttachment extends QueueSelectorAttachment {
    kind: "rule-engine";
    rule: RouterRuleUnion;
}

// @public
export interface RuleEngineWorkerSelectorAttachment extends WorkerSelectorAttachment {
    kind: "rule-engine";
    rule: RouterRuleUnion;
}

// @public (undocumented)
export interface ScheduleAndSuspendMode {
    // (undocumented)
    scheduleAt?: Date;
}

// @public
export interface ScoringRuleOptions {
    allowScoringBatchOfWorkers?: boolean;
    batchSize?: number;
    descendingOrder?: boolean;
    scoringParameters?: ScoringRuleParameterSelector[];
}

// @public
export type ScoringRuleParameterSelector = string;

// @public
export interface StaticQueueSelectorAttachment extends QueueSelectorAttachment {
    kind: "static";
    queueSelector: RouterQueueSelectorGenerated;
}

// @public
export interface StaticRouterRule extends Omit<StaticRouterRuleGenerated, "value"> {
    value?: JSONValue;
}

// @public
export interface StaticRouterRuleGenerated extends RouterRule {
    kind: "static-rule";
    value?: any;
}

// @public
export interface StaticWorkerSelectorAttachment extends WorkerSelectorAttachment {
    kind: "static";
    workerSelector: RouterWorkerSelectorGenerated;
}

// @public (undocumented)
export interface SuspendMode {
}

// @public
export interface UnassignJobOptions extends JobRouterUnassignJobActionOptionalParams {
    suspendMatching?: boolean;
}

// @public
export interface UnassignJobRequest {
    suspendMatching?: boolean;
}

// @public
export interface UnassignJobResponse {
    jobId: string;
    unassignmentCount: number;
}

// @public
export interface UpdateClassificationPolicyOptions extends JobRouterAdministrationUpsertClassificationPolicyOptionalParams {
    fallbackQueueId?: string;
    name?: string;
    prioritizationRule?: RouterRuleUnion;
    queueSelectors?: QueueSelectorAttachmentUnion[];
    workerSelectors?: WorkerSelectorAttachmentUnion[];
}

// @public
export interface UpdateDistributionPolicyOptions extends JobRouterAdministrationUpsertDistributionPolicyOptionalParams {
    mode?: DistributionModeUnion;
    name?: string;
    offerExpiresAfterSeconds?: number;
}

// @public
export interface UpdateExceptionPolicyOptions extends JobRouterAdministrationUpsertExceptionPolicyOptionalParams {
    exceptionRules?: {
        [propertyName: string]: ExceptionRule;
    };
    name?: string;
}

// @public
export interface UpdateJobOptions extends JobRouterUpsertJobOptionalParams {
    channelId?: string;
    channelReference?: string;
    classificationPolicyId?: string;
    dispositionCode?: string;
    labels?: JSONObject;
    // (undocumented)
    matchingMode?: RouterJobMatchingMode;
    notes?: Array<RouterJobNote>;
    priority?: number;
    queueId?: string;
    requestedWorkerSelectors?: RouterWorkerSelectorGenerated[];
    tags?: JSONObject;
}

// @public
export interface UpdateQueueOptions extends JobRouterAdministrationUpsertQueueOptionalParams {
    distributionPolicyId?: string;
    exceptionPolicyId?: string;
    labels?: JSONObject;
    name?: string;
}

// @public
export interface UpdateWorkerOptions extends JobRouterUpsertWorkerOptionalParams {
    availableForOffers?: boolean;
    channelConfigurations?: {
        [propertyName: string]: ChannelConfiguration;
    };
    labels?: JSONObject;
    queueAssignments?: JSONObject;
    tags?: JSONObject;
    totalCapacity?: number;
}

// @public
export interface WaitTimeExceptionTrigger extends ExceptionTrigger {
    kind: "wait-time";
    thresholdSeconds: number;
}

// @public
export interface WebhookRouterRule extends RouterRule {
    authorizationServerUri?: string;
    clientCredential?: Oauth2ClientCredential;
    kind: "webhook-rule";
    webhookUri?: string;
}

// @public
export interface WeightedAllocationQueueSelectorAttachment extends QueueSelectorAttachment {
    allocations: QueueWeightedAllocation[];
    kind: "weighted-allocation-queue-selector";
}

// @public
export interface WeightedAllocationWorkerSelectorAttachment extends WorkerSelectorAttachment {
    allocations: WorkerWeightedAllocation[];
    kind: "weighted-allocation-worker-selector";
}

// @public
export interface WorkerSelectorAttachment {
    kind: "conditional" | "pass-through" | "rule-engine" | "static" | "weighted-allocation-worker-selector";
}

// @public (undocumented)
export type WorkerSelectorAttachmentUnion = WorkerSelectorAttachment | ConditionalWorkerSelectorAttachment | PassThroughWorkerSelectorAttachment | RuleEngineWorkerSelectorAttachment | StaticWorkerSelectorAttachment | WeightedAllocationWorkerSelectorAttachment;

// @public
export interface WorkerWeightedAllocation {
    weight: number;
    workerSelectors: RouterWorkerSelectorGenerated[];
}

// (No @packageDocumentation comment for this package)

```
