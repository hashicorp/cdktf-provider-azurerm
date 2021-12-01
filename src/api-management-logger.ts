// https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementLoggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#api_management_name ApiManagementLogger#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#buffered ApiManagementLogger#buffered}
  */
  readonly buffered?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#description ApiManagementLogger#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#name ApiManagementLogger#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#resource_group_name ApiManagementLogger#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#resource_id ApiManagementLogger#resource_id}
  */
  readonly resourceId?: string;
  /**
  * application_insights block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#application_insights ApiManagementLogger#application_insights}
  */
  readonly applicationInsights?: ApiManagementLoggerApplicationInsights;
  /**
  * eventhub block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#eventhub ApiManagementLogger#eventhub}
  */
  readonly eventhub?: ApiManagementLoggerEventhub;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#timeouts ApiManagementLogger#timeouts}
  */
  readonly timeouts?: ApiManagementLoggerTimeouts;
}
export interface ApiManagementLoggerApplicationInsights {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#instrumentation_key ApiManagementLogger#instrumentation_key}
  */
  readonly instrumentationKey: string;
}

export function apiManagementLoggerApplicationInsightsToTerraform(struct?: ApiManagementLoggerApplicationInsightsOutputReference | ApiManagementLoggerApplicationInsights): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instrumentation_key: cdktf.stringToTerraform(struct!.instrumentationKey),
  }
}

export class ApiManagementLoggerApplicationInsightsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApiManagementLoggerApplicationInsights | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._instrumentationKey) {
      hasAnyValues = true;
      internalValueResult.instrumentationKey = this._instrumentationKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementLoggerApplicationInsights | undefined) {
    if (value === undefined) {
      this._instrumentationKey = undefined;
    }
    else {
      this._instrumentationKey = value.instrumentationKey;
    }
  }

  // instrumentation_key - computed: false, optional: false, required: true
  private _instrumentationKey?: string; 
  public get instrumentationKey() {
    return this.getStringAttribute('instrumentation_key');
  }
  public set instrumentationKey(value: string) {
    this._instrumentationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instrumentationKeyInput() {
    return this._instrumentationKey;
  }
}
export interface ApiManagementLoggerEventhub {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#connection_string ApiManagementLogger#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#name ApiManagementLogger#name}
  */
  readonly name: string;
}

export function apiManagementLoggerEventhubToTerraform(struct?: ApiManagementLoggerEventhubOutputReference | ApiManagementLoggerEventhub): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class ApiManagementLoggerEventhubOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApiManagementLoggerEventhub | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._connectionString) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementLoggerEventhub | undefined) {
    if (value === undefined) {
      this._connectionString = undefined;
      this._name = undefined;
    }
    else {
      this._connectionString = value.connectionString;
      this._name = value.name;
    }
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
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
}
export interface ApiManagementLoggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#create ApiManagementLogger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#delete ApiManagementLogger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#read ApiManagementLogger#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#update ApiManagementLogger#update}
  */
  readonly update?: string;
}

export function apiManagementLoggerTimeoutsToTerraform(struct?: ApiManagementLoggerTimeoutsOutputReference | ApiManagementLoggerTimeouts): any {
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

export class ApiManagementLoggerTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApiManagementLoggerTimeouts | undefined {
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

  public set internalValue(value: ApiManagementLoggerTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html azurerm_api_management_logger}
*/
export class ApiManagementLogger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_logger";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html azurerm_api_management_logger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementLoggerConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementLoggerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_logger',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._buffered = config.buffered;
    this._description = config.description;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._resourceId = config.resourceId;
    this._applicationInsights.internalValue = config.applicationInsights;
    this._eventhub.internalValue = config.eventhub;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName?: string; 
  public get apiManagementName() {
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName;
  }

  // buffered - computed: false, optional: true, required: false
  private _buffered?: boolean | cdktf.IResolvable; 
  public get buffered() {
    return this.getBooleanAttribute('buffered') as any;
  }
  public set buffered(value: boolean | cdktf.IResolvable) {
    this._buffered = value;
  }
  public resetBuffered() {
    this._buffered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferedInput() {
    return this._buffered;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // application_insights - computed: false, optional: true, required: false
  private _applicationInsights = new ApiManagementLoggerApplicationInsightsOutputReference(this as any, "application_insights", true);
  public get applicationInsights() {
    return this._applicationInsights;
  }
  public putApplicationInsights(value: ApiManagementLoggerApplicationInsights) {
    this._applicationInsights.internalValue = value;
  }
  public resetApplicationInsights() {
    this._applicationInsights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsInput() {
    return this._applicationInsights.internalValue;
  }

  // eventhub - computed: false, optional: true, required: false
  private _eventhub = new ApiManagementLoggerEventhubOutputReference(this as any, "eventhub", true);
  public get eventhub() {
    return this._eventhub;
  }
  public putEventhub(value: ApiManagementLoggerEventhub) {
    this._eventhub.internalValue = value;
  }
  public resetEventhub() {
    this._eventhub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubInput() {
    return this._eventhub.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiManagementLoggerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiManagementLoggerTimeouts) {
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
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      buffered: cdktf.booleanToTerraform(this._buffered),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      application_insights: apiManagementLoggerApplicationInsightsToTerraform(this._applicationInsights.internalValue),
      eventhub: apiManagementLoggerEventhubToTerraform(this._eventhub.internalValue),
      timeouts: apiManagementLoggerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
