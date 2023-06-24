// https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HpcCacheAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#hpc_cache_id HpcCacheAccessPolicy#hpc_cache_id}
  */
  readonly hpcCacheId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#id HpcCacheAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#name HpcCacheAccessPolicy#name}
  */
  readonly name: string;
  /**
  * access_rule block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#access_rule HpcCacheAccessPolicy#access_rule}
  */
  readonly accessRule: HpcCacheAccessPolicyAccessRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#timeouts HpcCacheAccessPolicy#timeouts}
  */
  readonly timeouts?: HpcCacheAccessPolicyTimeouts;
}
export interface HpcCacheAccessPolicyAccessRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#access HpcCacheAccessPolicy#access}
  */
  readonly access: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#anonymous_gid HpcCacheAccessPolicy#anonymous_gid}
  */
  readonly anonymousGid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#anonymous_uid HpcCacheAccessPolicy#anonymous_uid}
  */
  readonly anonymousUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#filter HpcCacheAccessPolicy#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#root_squash_enabled HpcCacheAccessPolicy#root_squash_enabled}
  */
  readonly rootSquashEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#scope HpcCacheAccessPolicy#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#submount_access_enabled HpcCacheAccessPolicy#submount_access_enabled}
  */
  readonly submountAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#suid_enabled HpcCacheAccessPolicy#suid_enabled}
  */
  readonly suidEnabled?: boolean | cdktf.IResolvable;
}

export function hpcCacheAccessPolicyAccessRuleToTerraform(struct?: HpcCacheAccessPolicyAccessRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    anonymous_gid: cdktf.numberToTerraform(struct!.anonymousGid),
    anonymous_uid: cdktf.numberToTerraform(struct!.anonymousUid),
    filter: cdktf.stringToTerraform(struct!.filter),
    root_squash_enabled: cdktf.booleanToTerraform(struct!.rootSquashEnabled),
    scope: cdktf.stringToTerraform(struct!.scope),
    submount_access_enabled: cdktf.booleanToTerraform(struct!.submountAccessEnabled),
    suid_enabled: cdktf.booleanToTerraform(struct!.suidEnabled),
  }
}

export class HpcCacheAccessPolicyAccessRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HpcCacheAccessPolicyAccessRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._anonymousGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymousGid = this._anonymousGid;
    }
    if (this._anonymousUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymousUid = this._anonymousUid;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._rootSquashEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootSquashEnabled = this._rootSquashEnabled;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._submountAccessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.submountAccessEnabled = this._submountAccessEnabled;
    }
    if (this._suidEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.suidEnabled = this._suidEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcCacheAccessPolicyAccessRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._anonymousGid = undefined;
      this._anonymousUid = undefined;
      this._filter = undefined;
      this._rootSquashEnabled = undefined;
      this._scope = undefined;
      this._submountAccessEnabled = undefined;
      this._suidEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._anonymousGid = value.anonymousGid;
      this._anonymousUid = value.anonymousUid;
      this._filter = value.filter;
      this._rootSquashEnabled = value.rootSquashEnabled;
      this._scope = value.scope;
      this._submountAccessEnabled = value.submountAccessEnabled;
      this._suidEnabled = value.suidEnabled;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // anonymous_gid - computed: false, optional: true, required: false
  private _anonymousGid?: number; 
  public get anonymousGid() {
    return this.getNumberAttribute('anonymous_gid');
  }
  public set anonymousGid(value: number) {
    this._anonymousGid = value;
  }
  public resetAnonymousGid() {
    this._anonymousGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousGidInput() {
    return this._anonymousGid;
  }

  // anonymous_uid - computed: false, optional: true, required: false
  private _anonymousUid?: number; 
  public get anonymousUid() {
    return this.getNumberAttribute('anonymous_uid');
  }
  public set anonymousUid(value: number) {
    this._anonymousUid = value;
  }
  public resetAnonymousUid() {
    this._anonymousUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousUidInput() {
    return this._anonymousUid;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // root_squash_enabled - computed: false, optional: true, required: false
  private _rootSquashEnabled?: boolean | cdktf.IResolvable; 
  public get rootSquashEnabled() {
    return this.getBooleanAttribute('root_squash_enabled');
  }
  public set rootSquashEnabled(value: boolean | cdktf.IResolvable) {
    this._rootSquashEnabled = value;
  }
  public resetRootSquashEnabled() {
    this._rootSquashEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSquashEnabledInput() {
    return this._rootSquashEnabled;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // submount_access_enabled - computed: false, optional: true, required: false
  private _submountAccessEnabled?: boolean | cdktf.IResolvable; 
  public get submountAccessEnabled() {
    return this.getBooleanAttribute('submount_access_enabled');
  }
  public set submountAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._submountAccessEnabled = value;
  }
  public resetSubmountAccessEnabled() {
    this._submountAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get submountAccessEnabledInput() {
    return this._submountAccessEnabled;
  }

  // suid_enabled - computed: false, optional: true, required: false
  private _suidEnabled?: boolean | cdktf.IResolvable; 
  public get suidEnabled() {
    return this.getBooleanAttribute('suid_enabled');
  }
  public set suidEnabled(value: boolean | cdktf.IResolvable) {
    this._suidEnabled = value;
  }
  public resetSuidEnabled() {
    this._suidEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suidEnabledInput() {
    return this._suidEnabled;
  }
}

export class HpcCacheAccessPolicyAccessRuleList extends cdktf.ComplexList {
  public internalValue? : HpcCacheAccessPolicyAccessRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HpcCacheAccessPolicyAccessRuleOutputReference {
    return new HpcCacheAccessPolicyAccessRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HpcCacheAccessPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#create HpcCacheAccessPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#delete HpcCacheAccessPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#read HpcCacheAccessPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy#update HpcCacheAccessPolicy#update}
  */
  readonly update?: string;
}

export function hpcCacheAccessPolicyTimeoutsToTerraform(struct?: HpcCacheAccessPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class HpcCacheAccessPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HpcCacheAccessPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: HpcCacheAccessPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy azurerm_hpc_cache_access_policy}
*/
export class HpcCacheAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_hpc_cache_access_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/hpc_cache_access_policy azurerm_hpc_cache_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HpcCacheAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: HpcCacheAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hpc_cache_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.62.1',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hpcCacheId = config.hpcCacheId;
    this._id = config.id;
    this._name = config.name;
    this._accessRule.internalValue = config.accessRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hpc_cache_id - computed: false, optional: false, required: true
  private _hpcCacheId?: string; 
  public get hpcCacheId() {
    return this.getStringAttribute('hpc_cache_id');
  }
  public set hpcCacheId(value: string) {
    this._hpcCacheId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hpcCacheIdInput() {
    return this._hpcCacheId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // access_rule - computed: false, optional: false, required: true
  private _accessRule = new HpcCacheAccessPolicyAccessRuleList(this, "access_rule", true);
  public get accessRule() {
    return this._accessRule;
  }
  public putAccessRule(value: HpcCacheAccessPolicyAccessRule[] | cdktf.IResolvable) {
    this._accessRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRuleInput() {
    return this._accessRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HpcCacheAccessPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HpcCacheAccessPolicyTimeouts) {
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
      hpc_cache_id: cdktf.stringToTerraform(this._hpcCacheId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      access_rule: cdktf.listMapper(hpcCacheAccessPolicyAccessRuleToTerraform, true)(this._accessRule.internalValue),
      timeouts: hpcCacheAccessPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
