// https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicebusQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#auto_delete_on_idle ServicebusQueue#auto_delete_on_idle}
  */
  readonly autoDeleteOnIdle?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#dead_lettering_on_message_expiration ServicebusQueue#dead_lettering_on_message_expiration}
  */
  readonly deadLetteringOnMessageExpiration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#default_message_ttl ServicebusQueue#default_message_ttl}
  */
  readonly defaultMessageTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#duplicate_detection_history_time_window ServicebusQueue#duplicate_detection_history_time_window}
  */
  readonly duplicateDetectionHistoryTimeWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#enable_batched_operations ServicebusQueue#enable_batched_operations}
  */
  readonly enableBatchedOperations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#enable_express ServicebusQueue#enable_express}
  */
  readonly enableExpress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#enable_partitioning ServicebusQueue#enable_partitioning}
  */
  readonly enablePartitioning?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#forward_dead_lettered_messages_to ServicebusQueue#forward_dead_lettered_messages_to}
  */
  readonly forwardDeadLetteredMessagesTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#forward_to ServicebusQueue#forward_to}
  */
  readonly forwardTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#lock_duration ServicebusQueue#lock_duration}
  */
  readonly lockDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#max_delivery_count ServicebusQueue#max_delivery_count}
  */
  readonly maxDeliveryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#max_size_in_megabytes ServicebusQueue#max_size_in_megabytes}
  */
  readonly maxSizeInMegabytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#name ServicebusQueue#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#namespace_name ServicebusQueue#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#requires_duplicate_detection ServicebusQueue#requires_duplicate_detection}
  */
  readonly requiresDuplicateDetection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#requires_session ServicebusQueue#requires_session}
  */
  readonly requiresSession?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#resource_group_name ServicebusQueue#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#status ServicebusQueue#status}
  */
  readonly status?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#timeouts ServicebusQueue#timeouts}
  */
  readonly timeouts?: ServicebusQueueTimeouts;
}
export interface ServicebusQueueTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#create ServicebusQueue#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#delete ServicebusQueue#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#read ServicebusQueue#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html#update ServicebusQueue#update}
  */
  readonly update?: string;
}

function servicebusQueueTimeoutsToTerraform(struct?: ServicebusQueueTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html azurerm_servicebus_queue}
*/
export class ServicebusQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_servicebus_queue";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html azurerm_servicebus_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicebusQueueConfig
  */
  public constructor(scope: Construct, id: string, config: ServicebusQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_queue',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoDeleteOnIdle = config.autoDeleteOnIdle;
    this._deadLetteringOnMessageExpiration = config.deadLetteringOnMessageExpiration;
    this._defaultMessageTtl = config.defaultMessageTtl;
    this._duplicateDetectionHistoryTimeWindow = config.duplicateDetectionHistoryTimeWindow;
    this._enableBatchedOperations = config.enableBatchedOperations;
    this._enableExpress = config.enableExpress;
    this._enablePartitioning = config.enablePartitioning;
    this._forwardDeadLetteredMessagesTo = config.forwardDeadLetteredMessagesTo;
    this._forwardTo = config.forwardTo;
    this._lockDuration = config.lockDuration;
    this._maxDeliveryCount = config.maxDeliveryCount;
    this._maxSizeInMegabytes = config.maxSizeInMegabytes;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._requiresDuplicateDetection = config.requiresDuplicateDetection;
    this._requiresSession = config.requiresSession;
    this._resourceGroupName = config.resourceGroupName;
    this._status = config.status;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_delete_on_idle - computed: true, optional: true, required: false
  private _autoDeleteOnIdle?: string;
  public get autoDeleteOnIdle() {
    return this.getStringAttribute('auto_delete_on_idle');
  }
  public set autoDeleteOnIdle(value: string) {
    this._autoDeleteOnIdle = value;
  }
  public resetAutoDeleteOnIdle() {
    this._autoDeleteOnIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteOnIdleInput() {
    return this._autoDeleteOnIdle
  }

  // dead_lettering_on_message_expiration - computed: false, optional: true, required: false
  private _deadLetteringOnMessageExpiration?: boolean | cdktf.IResolvable;
  public get deadLetteringOnMessageExpiration() {
    return this.getBooleanAttribute('dead_lettering_on_message_expiration');
  }
  public set deadLetteringOnMessageExpiration(value: boolean | cdktf.IResolvable ) {
    this._deadLetteringOnMessageExpiration = value;
  }
  public resetDeadLetteringOnMessageExpiration() {
    this._deadLetteringOnMessageExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetteringOnMessageExpirationInput() {
    return this._deadLetteringOnMessageExpiration
  }

  // default_message_ttl - computed: true, optional: true, required: false
  private _defaultMessageTtl?: string;
  public get defaultMessageTtl() {
    return this.getStringAttribute('default_message_ttl');
  }
  public set defaultMessageTtl(value: string) {
    this._defaultMessageTtl = value;
  }
  public resetDefaultMessageTtl() {
    this._defaultMessageTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMessageTtlInput() {
    return this._defaultMessageTtl
  }

  // duplicate_detection_history_time_window - computed: true, optional: true, required: false
  private _duplicateDetectionHistoryTimeWindow?: string;
  public get duplicateDetectionHistoryTimeWindow() {
    return this.getStringAttribute('duplicate_detection_history_time_window');
  }
  public set duplicateDetectionHistoryTimeWindow(value: string) {
    this._duplicateDetectionHistoryTimeWindow = value;
  }
  public resetDuplicateDetectionHistoryTimeWindow() {
    this._duplicateDetectionHistoryTimeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateDetectionHistoryTimeWindowInput() {
    return this._duplicateDetectionHistoryTimeWindow
  }

  // enable_batched_operations - computed: false, optional: true, required: false
  private _enableBatchedOperations?: boolean | cdktf.IResolvable;
  public get enableBatchedOperations() {
    return this.getBooleanAttribute('enable_batched_operations');
  }
  public set enableBatchedOperations(value: boolean | cdktf.IResolvable ) {
    this._enableBatchedOperations = value;
  }
  public resetEnableBatchedOperations() {
    this._enableBatchedOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBatchedOperationsInput() {
    return this._enableBatchedOperations
  }

  // enable_express - computed: false, optional: true, required: false
  private _enableExpress?: boolean | cdktf.IResolvable;
  public get enableExpress() {
    return this.getBooleanAttribute('enable_express');
  }
  public set enableExpress(value: boolean | cdktf.IResolvable ) {
    this._enableExpress = value;
  }
  public resetEnableExpress() {
    this._enableExpress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExpressInput() {
    return this._enableExpress
  }

  // enable_partitioning - computed: false, optional: true, required: false
  private _enablePartitioning?: boolean | cdktf.IResolvable;
  public get enablePartitioning() {
    return this.getBooleanAttribute('enable_partitioning');
  }
  public set enablePartitioning(value: boolean | cdktf.IResolvable ) {
    this._enablePartitioning = value;
  }
  public resetEnablePartitioning() {
    this._enablePartitioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePartitioningInput() {
    return this._enablePartitioning
  }

  // forward_dead_lettered_messages_to - computed: false, optional: true, required: false
  private _forwardDeadLetteredMessagesTo?: string;
  public get forwardDeadLetteredMessagesTo() {
    return this.getStringAttribute('forward_dead_lettered_messages_to');
  }
  public set forwardDeadLetteredMessagesTo(value: string ) {
    this._forwardDeadLetteredMessagesTo = value;
  }
  public resetForwardDeadLetteredMessagesTo() {
    this._forwardDeadLetteredMessagesTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardDeadLetteredMessagesToInput() {
    return this._forwardDeadLetteredMessagesTo
  }

  // forward_to - computed: false, optional: true, required: false
  private _forwardTo?: string;
  public get forwardTo() {
    return this.getStringAttribute('forward_to');
  }
  public set forwardTo(value: string ) {
    this._forwardTo = value;
  }
  public resetForwardTo() {
    this._forwardTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToInput() {
    return this._forwardTo
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lock_duration - computed: true, optional: true, required: false
  private _lockDuration?: string;
  public get lockDuration() {
    return this.getStringAttribute('lock_duration');
  }
  public set lockDuration(value: string) {
    this._lockDuration = value;
  }
  public resetLockDuration() {
    this._lockDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockDurationInput() {
    return this._lockDuration
  }

  // max_delivery_count - computed: false, optional: true, required: false
  private _maxDeliveryCount?: number;
  public get maxDeliveryCount() {
    return this.getNumberAttribute('max_delivery_count');
  }
  public set maxDeliveryCount(value: number ) {
    this._maxDeliveryCount = value;
  }
  public resetMaxDeliveryCount() {
    this._maxDeliveryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryCountInput() {
    return this._maxDeliveryCount
  }

  // max_size_in_megabytes - computed: true, optional: true, required: false
  private _maxSizeInMegabytes?: number;
  public get maxSizeInMegabytes() {
    return this.getNumberAttribute('max_size_in_megabytes');
  }
  public set maxSizeInMegabytes(value: number) {
    this._maxSizeInMegabytes = value;
  }
  public resetMaxSizeInMegabytes() {
    this._maxSizeInMegabytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInMegabytesInput() {
    return this._maxSizeInMegabytes
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName
  }

  // requires_duplicate_detection - computed: false, optional: true, required: false
  private _requiresDuplicateDetection?: boolean | cdktf.IResolvable;
  public get requiresDuplicateDetection() {
    return this.getBooleanAttribute('requires_duplicate_detection');
  }
  public set requiresDuplicateDetection(value: boolean | cdktf.IResolvable ) {
    this._requiresDuplicateDetection = value;
  }
  public resetRequiresDuplicateDetection() {
    this._requiresDuplicateDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresDuplicateDetectionInput() {
    return this._requiresDuplicateDetection
  }

  // requires_session - computed: false, optional: true, required: false
  private _requiresSession?: boolean | cdktf.IResolvable;
  public get requiresSession() {
    return this.getBooleanAttribute('requires_session');
  }
  public set requiresSession(value: boolean | cdktf.IResolvable ) {
    this._requiresSession = value;
  }
  public resetRequiresSession() {
    this._requiresSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresSessionInput() {
    return this._requiresSession
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicebusQueueTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ServicebusQueueTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_delete_on_idle: cdktf.stringToTerraform(this._autoDeleteOnIdle),
      dead_lettering_on_message_expiration: cdktf.booleanToTerraform(this._deadLetteringOnMessageExpiration),
      default_message_ttl: cdktf.stringToTerraform(this._defaultMessageTtl),
      duplicate_detection_history_time_window: cdktf.stringToTerraform(this._duplicateDetectionHistoryTimeWindow),
      enable_batched_operations: cdktf.booleanToTerraform(this._enableBatchedOperations),
      enable_express: cdktf.booleanToTerraform(this._enableExpress),
      enable_partitioning: cdktf.booleanToTerraform(this._enablePartitioning),
      forward_dead_lettered_messages_to: cdktf.stringToTerraform(this._forwardDeadLetteredMessagesTo),
      forward_to: cdktf.stringToTerraform(this._forwardTo),
      lock_duration: cdktf.stringToTerraform(this._lockDuration),
      max_delivery_count: cdktf.numberToTerraform(this._maxDeliveryCount),
      max_size_in_megabytes: cdktf.numberToTerraform(this._maxSizeInMegabytes),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      requires_duplicate_detection: cdktf.booleanToTerraform(this._requiresDuplicateDetection),
      requires_session: cdktf.booleanToTerraform(this._requiresSession),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      status: cdktf.stringToTerraform(this._status),
      timeouts: servicebusQueueTimeoutsToTerraform(this._timeouts),
    };
  }
}
