// https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceAssignmentVirtualMachineScaleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html#location MaintenanceAssignmentVirtualMachineScaleSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html#maintenance_configuration_id MaintenanceAssignmentVirtualMachineScaleSet#maintenance_configuration_id}
  */
  readonly maintenanceConfigurationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html#virtual_machine_scale_set_id MaintenanceAssignmentVirtualMachineScaleSet#virtual_machine_scale_set_id}
  */
  readonly virtualMachineScaleSetId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html#timeouts MaintenanceAssignmentVirtualMachineScaleSet#timeouts}
  */
  readonly timeouts?: MaintenanceAssignmentVirtualMachineScaleSetTimeouts;
}
export interface MaintenanceAssignmentVirtualMachineScaleSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html#create MaintenanceAssignmentVirtualMachineScaleSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html#delete MaintenanceAssignmentVirtualMachineScaleSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html#read MaintenanceAssignmentVirtualMachineScaleSet#read}
  */
  readonly read?: string;
}

function maintenanceAssignmentVirtualMachineScaleSetTimeoutsToTerraform(struct?: MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference | MaintenanceAssignmentVirtualMachineScaleSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html azurerm_maintenance_assignment_virtual_machine_scale_set}
*/
export class MaintenanceAssignmentVirtualMachineScaleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_maintenance_assignment_virtual_machine_scale_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_assignment_virtual_machine_scale_set.html azurerm_maintenance_assignment_virtual_machine_scale_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaintenanceAssignmentVirtualMachineScaleSetConfig
  */
  public constructor(scope: Construct, id: string, config: MaintenanceAssignmentVirtualMachineScaleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_maintenance_assignment_virtual_machine_scale_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._maintenanceConfigurationId = config.maintenanceConfigurationId;
    this._virtualMachineScaleSetId = config.virtualMachineScaleSetId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._location
  }

  // maintenance_configuration_id - computed: false, optional: false, required: true
  private _maintenanceConfigurationId?: string; 
  public get maintenanceConfigurationId() {
    return this.getStringAttribute('maintenance_configuration_id');
  }
  public set maintenanceConfigurationId(value: string) {
    this._maintenanceConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceConfigurationIdInput() {
    return this._maintenanceConfigurationId
  }

  // virtual_machine_scale_set_id - computed: false, optional: false, required: true
  private _virtualMachineScaleSetId?: string; 
  public get virtualMachineScaleSetId() {
    return this.getStringAttribute('virtual_machine_scale_set_id');
  }
  public set virtualMachineScaleSetId(value: string) {
    this._virtualMachineScaleSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineScaleSetIdInput() {
    return this._virtualMachineScaleSetId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MaintenanceAssignmentVirtualMachineScaleSetTimeouts | undefined; 
  private __timeoutsOutput = new MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MaintenanceAssignmentVirtualMachineScaleSetTimeouts | undefined) {
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
      location: cdktf.stringToTerraform(this._location),
      maintenance_configuration_id: cdktf.stringToTerraform(this._maintenanceConfigurationId),
      virtual_machine_scale_set_id: cdktf.stringToTerraform(this._virtualMachineScaleSetId),
      timeouts: maintenanceAssignmentVirtualMachineScaleSetTimeoutsToTerraform(this._timeouts),
    };
  }
}
