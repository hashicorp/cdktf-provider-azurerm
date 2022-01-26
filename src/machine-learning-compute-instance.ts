// https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineLearningComputeInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#authorization_type MachineLearningComputeInstance#authorization_type}
  */
  readonly authorizationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#description MachineLearningComputeInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#local_auth_enabled MachineLearningComputeInstance#local_auth_enabled}
  */
  readonly localAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#location MachineLearningComputeInstance#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#machine_learning_workspace_id MachineLearningComputeInstance#machine_learning_workspace_id}
  */
  readonly machineLearningWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#name MachineLearningComputeInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#subnet_resource_id MachineLearningComputeInstance#subnet_resource_id}
  */
  readonly subnetResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#tags MachineLearningComputeInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#virtual_machine_size MachineLearningComputeInstance#virtual_machine_size}
  */
  readonly virtualMachineSize: string;
  /**
  * assign_to_user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#assign_to_user MachineLearningComputeInstance#assign_to_user}
  */
  readonly assignToUser?: MachineLearningComputeInstanceAssignToUser;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#identity MachineLearningComputeInstance#identity}
  */
  readonly identity?: MachineLearningComputeInstanceIdentity;
  /**
  * ssh block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#ssh MachineLearningComputeInstance#ssh}
  */
  readonly ssh?: MachineLearningComputeInstanceSsh;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#timeouts MachineLearningComputeInstance#timeouts}
  */
  readonly timeouts?: MachineLearningComputeInstanceTimeouts;
}
export interface MachineLearningComputeInstanceAssignToUser {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#object_id MachineLearningComputeInstance#object_id}
  */
  readonly objectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#tenant_id MachineLearningComputeInstance#tenant_id}
  */
  readonly tenantId?: string;
}

export function machineLearningComputeInstanceAssignToUserToTerraform(struct?: MachineLearningComputeInstanceAssignToUserOutputReference | MachineLearningComputeInstanceAssignToUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id: cdktf.stringToTerraform(struct!.objectId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export class MachineLearningComputeInstanceAssignToUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MachineLearningComputeInstanceAssignToUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLearningComputeInstanceAssignToUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectId = value.objectId;
      this._tenantId = value.tenantId;
    }
  }

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface MachineLearningComputeInstanceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#identity_ids MachineLearningComputeInstance#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#type MachineLearningComputeInstance#type}
  */
  readonly type: string;
}

export function machineLearningComputeInstanceIdentityToTerraform(struct?: MachineLearningComputeInstanceIdentityOutputReference | MachineLearningComputeInstanceIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class MachineLearningComputeInstanceIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MachineLearningComputeInstanceIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLearningComputeInstanceIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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
export interface MachineLearningComputeInstanceSsh {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#public_key MachineLearningComputeInstance#public_key}
  */
  readonly publicKey: string;
}

export function machineLearningComputeInstanceSshToTerraform(struct?: MachineLearningComputeInstanceSshOutputReference | MachineLearningComputeInstanceSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}

export class MachineLearningComputeInstanceSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MachineLearningComputeInstanceSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLearningComputeInstanceSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicKey = value.publicKey;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface MachineLearningComputeInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#create MachineLearningComputeInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#delete MachineLearningComputeInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance#read MachineLearningComputeInstance#read}
  */
  readonly read?: string;
}

export function machineLearningComputeInstanceTimeoutsToTerraform(struct?: MachineLearningComputeInstanceTimeoutsOutputReference | MachineLearningComputeInstanceTimeouts | cdktf.IResolvable): any {
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

export class MachineLearningComputeInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MachineLearningComputeInstanceTimeouts | undefined {
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

  public set internalValue(value: MachineLearningComputeInstanceTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance azurerm_machine_learning_compute_instance}
*/
export class MachineLearningComputeInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_machine_learning_compute_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_compute_instance azurerm_machine_learning_compute_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineLearningComputeInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MachineLearningComputeInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_machine_learning_compute_instance',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorizationType = config.authorizationType;
    this._description = config.description;
    this._localAuthEnabled = config.localAuthEnabled;
    this._location = config.location;
    this._machineLearningWorkspaceId = config.machineLearningWorkspaceId;
    this._name = config.name;
    this._subnetResourceId = config.subnetResourceId;
    this._tags = config.tags;
    this._virtualMachineSize = config.virtualMachineSize;
    this._assignToUser.internalValue = config.assignToUser;
    this._identity.internalValue = config.identity;
    this._ssh.internalValue = config.ssh;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_type - computed: false, optional: true, required: false
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  public resetAuthorizationType() {
    this._authorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
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

  // local_auth_enabled - computed: false, optional: true, required: false
  private _localAuthEnabled?: boolean | cdktf.IResolvable; 
  public get localAuthEnabled() {
    return this.getBooleanAttribute('local_auth_enabled');
  }
  public set localAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._localAuthEnabled = value;
  }
  public resetLocalAuthEnabled() {
    this._localAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthEnabledInput() {
    return this._localAuthEnabled;
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

  // machine_learning_workspace_id - computed: false, optional: false, required: true
  private _machineLearningWorkspaceId?: string; 
  public get machineLearningWorkspaceId() {
    return this.getStringAttribute('machine_learning_workspace_id');
  }
  public set machineLearningWorkspaceId(value: string) {
    this._machineLearningWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLearningWorkspaceIdInput() {
    return this._machineLearningWorkspaceId;
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

  // subnet_resource_id - computed: false, optional: true, required: false
  private _subnetResourceId?: string; 
  public get subnetResourceId() {
    return this.getStringAttribute('subnet_resource_id');
  }
  public set subnetResourceId(value: string) {
    this._subnetResourceId = value;
  }
  public resetSubnetResourceId() {
    this._subnetResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetResourceIdInput() {
    return this._subnetResourceId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // virtual_machine_size - computed: false, optional: false, required: true
  private _virtualMachineSize?: string; 
  public get virtualMachineSize() {
    return this.getStringAttribute('virtual_machine_size');
  }
  public set virtualMachineSize(value: string) {
    this._virtualMachineSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineSizeInput() {
    return this._virtualMachineSize;
  }

  // assign_to_user - computed: false, optional: true, required: false
  private _assignToUser = new MachineLearningComputeInstanceAssignToUserOutputReference(this, "assign_to_user", true);
  public get assignToUser() {
    return this._assignToUser;
  }
  public putAssignToUser(value: MachineLearningComputeInstanceAssignToUser) {
    this._assignToUser.internalValue = value;
  }
  public resetAssignToUser() {
    this._assignToUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignToUserInput() {
    return this._assignToUser.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new MachineLearningComputeInstanceIdentityOutputReference(this, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: MachineLearningComputeInstanceIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new MachineLearningComputeInstanceSshOutputReference(this, "ssh", true);
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: MachineLearningComputeInstanceSsh) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MachineLearningComputeInstanceTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MachineLearningComputeInstanceTimeouts) {
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
      authorization_type: cdktf.stringToTerraform(this._authorizationType),
      description: cdktf.stringToTerraform(this._description),
      local_auth_enabled: cdktf.booleanToTerraform(this._localAuthEnabled),
      location: cdktf.stringToTerraform(this._location),
      machine_learning_workspace_id: cdktf.stringToTerraform(this._machineLearningWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      subnet_resource_id: cdktf.stringToTerraform(this._subnetResourceId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      virtual_machine_size: cdktf.stringToTerraform(this._virtualMachineSize),
      assign_to_user: machineLearningComputeInstanceAssignToUserToTerraform(this._assignToUser.internalValue),
      identity: machineLearningComputeInstanceIdentityToTerraform(this._identity.internalValue),
      ssh: machineLearningComputeInstanceSshToTerraform(this._ssh.internalValue),
      timeouts: machineLearningComputeInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
