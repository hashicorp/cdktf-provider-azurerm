// https://www.terraform.io/docs/providers/azurerm/r/app_service_slot_custom_hostname_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceSlotCustomHostnameBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot_custom_hostname_binding#app_service_slot_id AppServiceSlotCustomHostnameBinding#app_service_slot_id}
  */
  readonly appServiceSlotId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot_custom_hostname_binding#hostname AppServiceSlotCustomHostnameBinding#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot_custom_hostname_binding#ssl_state AppServiceSlotCustomHostnameBinding#ssl_state}
  */
  readonly sslState?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot_custom_hostname_binding#thumbprint AppServiceSlotCustomHostnameBinding#thumbprint}
  */
  readonly thumbprint?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot_custom_hostname_binding#timeouts AppServiceSlotCustomHostnameBinding#timeouts}
  */
  readonly timeouts?: AppServiceSlotCustomHostnameBindingTimeouts;
}
export interface AppServiceSlotCustomHostnameBindingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot_custom_hostname_binding#create AppServiceSlotCustomHostnameBinding#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot_custom_hostname_binding#delete AppServiceSlotCustomHostnameBinding#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot_custom_hostname_binding#read AppServiceSlotCustomHostnameBinding#read}
  */
  readonly read?: string;
}

export function appServiceSlotCustomHostnameBindingTimeoutsToTerraform(struct?: AppServiceSlotCustomHostnameBindingTimeoutsOutputReference | AppServiceSlotCustomHostnameBindingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class AppServiceSlotCustomHostnameBindingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppServiceSlotCustomHostnameBindingTimeouts | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppServiceSlotCustomHostnameBindingTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot_custom_hostname_binding azurerm_app_service_slot_custom_hostname_binding}
*/
export class AppServiceSlotCustomHostnameBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_app_service_slot_custom_hostname_binding";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot_custom_hostname_binding azurerm_app_service_slot_custom_hostname_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppServiceSlotCustomHostnameBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppServiceSlotCustomHostnameBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_slot_custom_hostname_binding',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appServiceSlotId = config.appServiceSlotId;
    this._hostname = config.hostname;
    this._sslState = config.sslState;
    this._thumbprint = config.thumbprint;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_slot_id - computed: false, optional: false, required: true
  private _appServiceSlotId?: string; 
  public get appServiceSlotId() {
    return this.getStringAttribute('app_service_slot_id');
  }
  public set appServiceSlotId(value: string) {
    this._appServiceSlotId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceSlotIdInput() {
    return this._appServiceSlotId;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ssl_state - computed: true, optional: true, required: false
  private _sslState?: string; 
  public get sslState() {
    return this.getStringAttribute('ssl_state');
  }
  public set sslState(value: string) {
    this._sslState = value;
  }
  public resetSslState() {
    this._sslState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslStateInput() {
    return this._sslState;
  }

  // thumbprint - computed: true, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // virtual_ip - computed: true, optional: false, required: false
  public get virtualIp() {
    return this.getStringAttribute('virtual_ip');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppServiceSlotCustomHostnameBindingTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppServiceSlotCustomHostnameBindingTimeouts) {
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
      app_service_slot_id: cdktf.stringToTerraform(this._appServiceSlotId),
      hostname: cdktf.stringToTerraform(this._hostname),
      ssl_state: cdktf.stringToTerraform(this._sslState),
      thumbprint: cdktf.stringToTerraform(this._thumbprint),
      timeouts: appServiceSlotCustomHostnameBindingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
