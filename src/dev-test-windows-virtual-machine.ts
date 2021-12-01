// https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevTestWindowsVirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#allow_claim DevTestWindowsVirtualMachine#allow_claim}
  */
  readonly allowClaim?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#disallow_public_ip_address DevTestWindowsVirtualMachine#disallow_public_ip_address}
  */
  readonly disallowPublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#lab_name DevTestWindowsVirtualMachine#lab_name}
  */
  readonly labName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#lab_subnet_name DevTestWindowsVirtualMachine#lab_subnet_name}
  */
  readonly labSubnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#lab_virtual_network_id DevTestWindowsVirtualMachine#lab_virtual_network_id}
  */
  readonly labVirtualNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#location DevTestWindowsVirtualMachine#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#name DevTestWindowsVirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#notes DevTestWindowsVirtualMachine#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#password DevTestWindowsVirtualMachine#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#resource_group_name DevTestWindowsVirtualMachine#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#size DevTestWindowsVirtualMachine#size}
  */
  readonly size: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#storage_type DevTestWindowsVirtualMachine#storage_type}
  */
  readonly storageType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#tags DevTestWindowsVirtualMachine#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#username DevTestWindowsVirtualMachine#username}
  */
  readonly username: string;
  /**
  * gallery_image_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#gallery_image_reference DevTestWindowsVirtualMachine#gallery_image_reference}
  */
  readonly galleryImageReference: DevTestWindowsVirtualMachineGalleryImageReference;
  /**
  * inbound_nat_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#inbound_nat_rule DevTestWindowsVirtualMachine#inbound_nat_rule}
  */
  readonly inboundNatRule?: DevTestWindowsVirtualMachineInboundNatRule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#timeouts DevTestWindowsVirtualMachine#timeouts}
  */
  readonly timeouts?: DevTestWindowsVirtualMachineTimeouts;
}
export interface DevTestWindowsVirtualMachineGalleryImageReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#offer DevTestWindowsVirtualMachine#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#publisher DevTestWindowsVirtualMachine#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#sku DevTestWindowsVirtualMachine#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#version DevTestWindowsVirtualMachine#version}
  */
  readonly version: string;
}

export function devTestWindowsVirtualMachineGalleryImageReferenceToTerraform(struct?: DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference | DevTestWindowsVirtualMachineGalleryImageReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DevTestWindowsVirtualMachineGalleryImageReference | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._offer) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevTestWindowsVirtualMachineGalleryImageReference | undefined) {
    if (value === undefined) {
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else {
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DevTestWindowsVirtualMachineInboundNatRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#backend_port DevTestWindowsVirtualMachine#backend_port}
  */
  readonly backendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#protocol DevTestWindowsVirtualMachine#protocol}
  */
  readonly protocol: string;
}

export function devTestWindowsVirtualMachineInboundNatRuleToTerraform(struct?: DevTestWindowsVirtualMachineInboundNatRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_port: cdktf.numberToTerraform(struct!.backendPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface DevTestWindowsVirtualMachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#create DevTestWindowsVirtualMachine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#delete DevTestWindowsVirtualMachine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#read DevTestWindowsVirtualMachine#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html#update DevTestWindowsVirtualMachine#update}
  */
  readonly update?: string;
}

export function devTestWindowsVirtualMachineTimeoutsToTerraform(struct?: DevTestWindowsVirtualMachineTimeoutsOutputReference | DevTestWindowsVirtualMachineTimeouts): any {
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

export class DevTestWindowsVirtualMachineTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DevTestWindowsVirtualMachineTimeouts | undefined {
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

  public set internalValue(value: DevTestWindowsVirtualMachineTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html azurerm_dev_test_windows_virtual_machine}
*/
export class DevTestWindowsVirtualMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_dev_test_windows_virtual_machine";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_windows_virtual_machine.html azurerm_dev_test_windows_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevTestWindowsVirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: DevTestWindowsVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dev_test_windows_virtual_machine',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowClaim = config.allowClaim;
    this._disallowPublicIpAddress = config.disallowPublicIpAddress;
    this._labName = config.labName;
    this._labSubnetName = config.labSubnetName;
    this._labVirtualNetworkId = config.labVirtualNetworkId;
    this._location = config.location;
    this._name = config.name;
    this._notes = config.notes;
    this._password = config.password;
    this._resourceGroupName = config.resourceGroupName;
    this._size = config.size;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._username = config.username;
    this._galleryImageReference.internalValue = config.galleryImageReference;
    this._inboundNatRule = config.inboundNatRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_claim - computed: false, optional: true, required: false
  private _allowClaim?: boolean | cdktf.IResolvable; 
  public get allowClaim() {
    return this.getBooleanAttribute('allow_claim') as any;
  }
  public set allowClaim(value: boolean | cdktf.IResolvable) {
    this._allowClaim = value;
  }
  public resetAllowClaim() {
    this._allowClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClaimInput() {
    return this._allowClaim;
  }

  // disallow_public_ip_address - computed: false, optional: true, required: false
  private _disallowPublicIpAddress?: boolean | cdktf.IResolvable; 
  public get disallowPublicIpAddress() {
    return this.getBooleanAttribute('disallow_public_ip_address') as any;
  }
  public set disallowPublicIpAddress(value: boolean | cdktf.IResolvable) {
    this._disallowPublicIpAddress = value;
  }
  public resetDisallowPublicIpAddress() {
    this._disallowPublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowPublicIpAddressInput() {
    return this._disallowPublicIpAddress;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lab_name - computed: false, optional: false, required: true
  private _labName?: string; 
  public get labName() {
    return this.getStringAttribute('lab_name');
  }
  public set labName(value: string) {
    this._labName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labNameInput() {
    return this._labName;
  }

  // lab_subnet_name - computed: false, optional: false, required: true
  private _labSubnetName?: string; 
  public get labSubnetName() {
    return this.getStringAttribute('lab_subnet_name');
  }
  public set labSubnetName(value: string) {
    this._labSubnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labSubnetNameInput() {
    return this._labSubnetName;
  }

  // lab_virtual_network_id - computed: false, optional: false, required: true
  private _labVirtualNetworkId?: string; 
  public get labVirtualNetworkId() {
    return this.getStringAttribute('lab_virtual_network_id');
  }
  public set labVirtualNetworkId(value: string) {
    this._labVirtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labVirtualNetworkIdInput() {
    return this._labVirtualNetworkId;
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
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

  // unique_identifier - computed: true, optional: false, required: false
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // gallery_image_reference - computed: false, optional: false, required: true
  private _galleryImageReference = new DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference(this as any, "gallery_image_reference", true);
  public get galleryImageReference() {
    return this._galleryImageReference;
  }
  public putGalleryImageReference(value: DevTestWindowsVirtualMachineGalleryImageReference) {
    this._galleryImageReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryImageReferenceInput() {
    return this._galleryImageReference.internalValue;
  }

  // inbound_nat_rule - computed: false, optional: true, required: false
  private _inboundNatRule?: DevTestWindowsVirtualMachineInboundNatRule[]; 
  public get inboundNatRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('inbound_nat_rule') as any;
  }
  public set inboundNatRule(value: DevTestWindowsVirtualMachineInboundNatRule[]) {
    this._inboundNatRule = value;
  }
  public resetInboundNatRule() {
    this._inboundNatRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundNatRuleInput() {
    return this._inboundNatRule;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DevTestWindowsVirtualMachineTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DevTestWindowsVirtualMachineTimeouts) {
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
      allow_claim: cdktf.booleanToTerraform(this._allowClaim),
      disallow_public_ip_address: cdktf.booleanToTerraform(this._disallowPublicIpAddress),
      lab_name: cdktf.stringToTerraform(this._labName),
      lab_subnet_name: cdktf.stringToTerraform(this._labSubnetName),
      lab_virtual_network_id: cdktf.stringToTerraform(this._labVirtualNetworkId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      password: cdktf.stringToTerraform(this._password),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      size: cdktf.stringToTerraform(this._size),
      storage_type: cdktf.stringToTerraform(this._storageType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      username: cdktf.stringToTerraform(this._username),
      gallery_image_reference: devTestWindowsVirtualMachineGalleryImageReferenceToTerraform(this._galleryImageReference.internalValue),
      inbound_nat_rule: cdktf.listMapper(devTestWindowsVirtualMachineInboundNatRuleToTerraform)(this._inboundNatRule),
      timeouts: devTestWindowsVirtualMachineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
