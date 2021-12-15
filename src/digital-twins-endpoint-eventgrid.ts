// https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DigitalTwinsEndpointEventgridConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#dead_letter_storage_secret DigitalTwinsEndpointEventgrid#dead_letter_storage_secret}
  */
  readonly deadLetterStorageSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#digital_twins_id DigitalTwinsEndpointEventgrid#digital_twins_id}
  */
  readonly digitalTwinsId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#eventgrid_topic_endpoint DigitalTwinsEndpointEventgrid#eventgrid_topic_endpoint}
  */
  readonly eventgridTopicEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#eventgrid_topic_primary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_primary_access_key}
  */
  readonly eventgridTopicPrimaryAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#eventgrid_topic_secondary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_secondary_access_key}
  */
  readonly eventgridTopicSecondaryAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#name DigitalTwinsEndpointEventgrid#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#timeouts DigitalTwinsEndpointEventgrid#timeouts}
  */
  readonly timeouts?: DigitalTwinsEndpointEventgridTimeouts;
}
export interface DigitalTwinsEndpointEventgridTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#create DigitalTwinsEndpointEventgrid#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#delete DigitalTwinsEndpointEventgrid#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#read DigitalTwinsEndpointEventgrid#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#update DigitalTwinsEndpointEventgrid#update}
  */
  readonly update?: string;
}

export function digitalTwinsEndpointEventgridTimeoutsToTerraform(struct?: DigitalTwinsEndpointEventgridTimeoutsOutputReference | DigitalTwinsEndpointEventgridTimeouts): any {
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

export class DigitalTwinsEndpointEventgridTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DigitalTwinsEndpointEventgridTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DigitalTwinsEndpointEventgridTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html azurerm_digital_twins_endpoint_eventgrid}
*/
export class DigitalTwinsEndpointEventgrid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_digital_twins_endpoint_eventgrid";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html azurerm_digital_twins_endpoint_eventgrid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DigitalTwinsEndpointEventgridConfig
  */
  public constructor(scope: Construct, id: string, config: DigitalTwinsEndpointEventgridConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_digital_twins_endpoint_eventgrid',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deadLetterStorageSecret = config.deadLetterStorageSecret;
    this._digitalTwinsId = config.digitalTwinsId;
    this._eventgridTopicEndpoint = config.eventgridTopicEndpoint;
    this._eventgridTopicPrimaryAccessKey = config.eventgridTopicPrimaryAccessKey;
    this._eventgridTopicSecondaryAccessKey = config.eventgridTopicSecondaryAccessKey;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dead_letter_storage_secret - computed: false, optional: true, required: false
  private _deadLetterStorageSecret?: string; 
  public get deadLetterStorageSecret() {
    return this.getStringAttribute('dead_letter_storage_secret');
  }
  public set deadLetterStorageSecret(value: string) {
    this._deadLetterStorageSecret = value;
  }
  public resetDeadLetterStorageSecret() {
    this._deadLetterStorageSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterStorageSecretInput() {
    return this._deadLetterStorageSecret;
  }

  // digital_twins_id - computed: false, optional: false, required: true
  private _digitalTwinsId?: string; 
  public get digitalTwinsId() {
    return this.getStringAttribute('digital_twins_id');
  }
  public set digitalTwinsId(value: string) {
    this._digitalTwinsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinsIdInput() {
    return this._digitalTwinsId;
  }

  // eventgrid_topic_endpoint - computed: false, optional: false, required: true
  private _eventgridTopicEndpoint?: string; 
  public get eventgridTopicEndpoint() {
    return this.getStringAttribute('eventgrid_topic_endpoint');
  }
  public set eventgridTopicEndpoint(value: string) {
    this._eventgridTopicEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventgridTopicEndpointInput() {
    return this._eventgridTopicEndpoint;
  }

  // eventgrid_topic_primary_access_key - computed: false, optional: false, required: true
  private _eventgridTopicPrimaryAccessKey?: string; 
  public get eventgridTopicPrimaryAccessKey() {
    return this.getStringAttribute('eventgrid_topic_primary_access_key');
  }
  public set eventgridTopicPrimaryAccessKey(value: string) {
    this._eventgridTopicPrimaryAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventgridTopicPrimaryAccessKeyInput() {
    return this._eventgridTopicPrimaryAccessKey;
  }

  // eventgrid_topic_secondary_access_key - computed: false, optional: false, required: true
  private _eventgridTopicSecondaryAccessKey?: string; 
  public get eventgridTopicSecondaryAccessKey() {
    return this.getStringAttribute('eventgrid_topic_secondary_access_key');
  }
  public set eventgridTopicSecondaryAccessKey(value: string) {
    this._eventgridTopicSecondaryAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventgridTopicSecondaryAccessKeyInput() {
    return this._eventgridTopicSecondaryAccessKey;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DigitalTwinsEndpointEventgridTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DigitalTwinsEndpointEventgridTimeouts) {
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
      dead_letter_storage_secret: cdktf.stringToTerraform(this._deadLetterStorageSecret),
      digital_twins_id: cdktf.stringToTerraform(this._digitalTwinsId),
      eventgrid_topic_endpoint: cdktf.stringToTerraform(this._eventgridTopicEndpoint),
      eventgrid_topic_primary_access_key: cdktf.stringToTerraform(this._eventgridTopicPrimaryAccessKey),
      eventgrid_topic_secondary_access_key: cdktf.stringToTerraform(this._eventgridTopicSecondaryAccessKey),
      name: cdktf.stringToTerraform(this._name),
      timeouts: digitalTwinsEndpointEventgridTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
