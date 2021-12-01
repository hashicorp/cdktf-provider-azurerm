// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#compatibility_level StreamAnalyticsJob#compatibility_level}
  */
  readonly compatibilityLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#data_locale StreamAnalyticsJob#data_locale}
  */
  readonly dataLocale?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#events_late_arrival_max_delay_in_seconds StreamAnalyticsJob#events_late_arrival_max_delay_in_seconds}
  */
  readonly eventsLateArrivalMaxDelayInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#events_out_of_order_max_delay_in_seconds StreamAnalyticsJob#events_out_of_order_max_delay_in_seconds}
  */
  readonly eventsOutOfOrderMaxDelayInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#events_out_of_order_policy StreamAnalyticsJob#events_out_of_order_policy}
  */
  readonly eventsOutOfOrderPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#location StreamAnalyticsJob#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#name StreamAnalyticsJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#output_error_policy StreamAnalyticsJob#output_error_policy}
  */
  readonly outputErrorPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#resource_group_name StreamAnalyticsJob#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#stream_analytics_cluster_id StreamAnalyticsJob#stream_analytics_cluster_id}
  */
  readonly streamAnalyticsClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#streaming_units StreamAnalyticsJob#streaming_units}
  */
  readonly streamingUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#tags StreamAnalyticsJob#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#transformation_query StreamAnalyticsJob#transformation_query}
  */
  readonly transformationQuery: string;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#identity StreamAnalyticsJob#identity}
  */
  readonly identity?: StreamAnalyticsJobIdentity;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#timeouts StreamAnalyticsJob#timeouts}
  */
  readonly timeouts?: StreamAnalyticsJobTimeouts;
}
export interface StreamAnalyticsJobIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#type StreamAnalyticsJob#type}
  */
  readonly type: string;
}

export function streamAnalyticsJobIdentityToTerraform(struct?: StreamAnalyticsJobIdentityOutputReference | StreamAnalyticsJobIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class StreamAnalyticsJobIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StreamAnalyticsJobIdentity | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamAnalyticsJobIdentity | undefined) {
    if (value === undefined) {
      this._type = undefined;
    }
    else {
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface StreamAnalyticsJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#create StreamAnalyticsJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#delete StreamAnalyticsJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#read StreamAnalyticsJob#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#update StreamAnalyticsJob#update}
  */
  readonly update?: string;
}

export function streamAnalyticsJobTimeoutsToTerraform(struct?: StreamAnalyticsJobTimeoutsOutputReference | StreamAnalyticsJobTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class StreamAnalyticsJobTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StreamAnalyticsJobTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamAnalyticsJobTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html azurerm_stream_analytics_job}
*/
export class StreamAnalyticsJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_stream_analytics_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html azurerm_stream_analytics_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamAnalyticsJobConfig
  */
  public constructor(scope: Construct, id: string, config: StreamAnalyticsJobConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_job',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compatibilityLevel = config.compatibilityLevel;
    this._dataLocale = config.dataLocale;
    this._eventsLateArrivalMaxDelayInSeconds = config.eventsLateArrivalMaxDelayInSeconds;
    this._eventsOutOfOrderMaxDelayInSeconds = config.eventsOutOfOrderMaxDelayInSeconds;
    this._eventsOutOfOrderPolicy = config.eventsOutOfOrderPolicy;
    this._location = config.location;
    this._name = config.name;
    this._outputErrorPolicy = config.outputErrorPolicy;
    this._resourceGroupName = config.resourceGroupName;
    this._streamAnalyticsClusterId = config.streamAnalyticsClusterId;
    this._streamingUnits = config.streamingUnits;
    this._tags = config.tags;
    this._transformationQuery = config.transformationQuery;
    this._identity.internalValue = config.identity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compatibility_level - computed: true, optional: true, required: false
  private _compatibilityLevel?: string; 
  public get compatibilityLevel() {
    return this.getStringAttribute('compatibility_level');
  }
  public set compatibilityLevel(value: string) {
    this._compatibilityLevel = value;
  }
  public resetCompatibilityLevel() {
    this._compatibilityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityLevelInput() {
    return this._compatibilityLevel;
  }

  // data_locale - computed: true, optional: true, required: false
  private _dataLocale?: string; 
  public get dataLocale() {
    return this.getStringAttribute('data_locale');
  }
  public set dataLocale(value: string) {
    this._dataLocale = value;
  }
  public resetDataLocale() {
    this._dataLocale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLocaleInput() {
    return this._dataLocale;
  }

  // events_late_arrival_max_delay_in_seconds - computed: false, optional: true, required: false
  private _eventsLateArrivalMaxDelayInSeconds?: number; 
  public get eventsLateArrivalMaxDelayInSeconds() {
    return this.getNumberAttribute('events_late_arrival_max_delay_in_seconds');
  }
  public set eventsLateArrivalMaxDelayInSeconds(value: number) {
    this._eventsLateArrivalMaxDelayInSeconds = value;
  }
  public resetEventsLateArrivalMaxDelayInSeconds() {
    this._eventsLateArrivalMaxDelayInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsLateArrivalMaxDelayInSecondsInput() {
    return this._eventsLateArrivalMaxDelayInSeconds;
  }

  // events_out_of_order_max_delay_in_seconds - computed: false, optional: true, required: false
  private _eventsOutOfOrderMaxDelayInSeconds?: number; 
  public get eventsOutOfOrderMaxDelayInSeconds() {
    return this.getNumberAttribute('events_out_of_order_max_delay_in_seconds');
  }
  public set eventsOutOfOrderMaxDelayInSeconds(value: number) {
    this._eventsOutOfOrderMaxDelayInSeconds = value;
  }
  public resetEventsOutOfOrderMaxDelayInSeconds() {
    this._eventsOutOfOrderMaxDelayInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsOutOfOrderMaxDelayInSecondsInput() {
    return this._eventsOutOfOrderMaxDelayInSeconds;
  }

  // events_out_of_order_policy - computed: false, optional: true, required: false
  private _eventsOutOfOrderPolicy?: string; 
  public get eventsOutOfOrderPolicy() {
    return this.getStringAttribute('events_out_of_order_policy');
  }
  public set eventsOutOfOrderPolicy(value: string) {
    this._eventsOutOfOrderPolicy = value;
  }
  public resetEventsOutOfOrderPolicy() {
    this._eventsOutOfOrderPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsOutOfOrderPolicyInput() {
    return this._eventsOutOfOrderPolicy;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // output_error_policy - computed: false, optional: true, required: false
  private _outputErrorPolicy?: string; 
  public get outputErrorPolicy() {
    return this.getStringAttribute('output_error_policy');
  }
  public set outputErrorPolicy(value: string) {
    this._outputErrorPolicy = value;
  }
  public resetOutputErrorPolicy() {
    this._outputErrorPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputErrorPolicyInput() {
    return this._outputErrorPolicy;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // stream_analytics_cluster_id - computed: false, optional: true, required: false
  private _streamAnalyticsClusterId?: string; 
  public get streamAnalyticsClusterId() {
    return this.getStringAttribute('stream_analytics_cluster_id');
  }
  public set streamAnalyticsClusterId(value: string) {
    this._streamAnalyticsClusterId = value;
  }
  public resetStreamAnalyticsClusterId() {
    this._streamAnalyticsClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamAnalyticsClusterIdInput() {
    return this._streamAnalyticsClusterId;
  }

  // streaming_units - computed: false, optional: false, required: true
  private _streamingUnits?: number; 
  public get streamingUnits() {
    return this.getNumberAttribute('streaming_units');
  }
  public set streamingUnits(value: number) {
    this._streamingUnits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingUnitsInput() {
    return this._streamingUnits;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // transformation_query - computed: false, optional: false, required: true
  private _transformationQuery?: string; 
  public get transformationQuery() {
    return this.getStringAttribute('transformation_query');
  }
  public set transformationQuery(value: string) {
    this._transformationQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationQueryInput() {
    return this._transformationQuery;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new StreamAnalyticsJobIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: StreamAnalyticsJobIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StreamAnalyticsJobTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StreamAnalyticsJobTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compatibility_level: cdktf.stringToTerraform(this._compatibilityLevel),
      data_locale: cdktf.stringToTerraform(this._dataLocale),
      events_late_arrival_max_delay_in_seconds: cdktf.numberToTerraform(this._eventsLateArrivalMaxDelayInSeconds),
      events_out_of_order_max_delay_in_seconds: cdktf.numberToTerraform(this._eventsOutOfOrderMaxDelayInSeconds),
      events_out_of_order_policy: cdktf.stringToTerraform(this._eventsOutOfOrderPolicy),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      output_error_policy: cdktf.stringToTerraform(this._outputErrorPolicy),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      stream_analytics_cluster_id: cdktf.stringToTerraform(this._streamAnalyticsClusterId),
      streaming_units: cdktf.numberToTerraform(this._streamingUnits),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      transformation_query: cdktf.stringToTerraform(this._transformationQuery),
      identity: streamAnalyticsJobIdentityToTerraform(this._identity.internalValue),
      timeouts: streamAnalyticsJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
