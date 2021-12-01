// https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventhubNamespaceCustomerManagedKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html#eventhub_namespace_id EventhubNamespaceCustomerManagedKey#eventhub_namespace_id}
  */
  readonly eventhubNamespaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html#key_vault_key_ids EventhubNamespaceCustomerManagedKey#key_vault_key_ids}
  */
  readonly keyVaultKeyIds: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html#timeouts EventhubNamespaceCustomerManagedKey#timeouts}
  */
  readonly timeouts?: EventhubNamespaceCustomerManagedKeyTimeouts;
}
export interface EventhubNamespaceCustomerManagedKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html#create EventhubNamespaceCustomerManagedKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html#delete EventhubNamespaceCustomerManagedKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html#read EventhubNamespaceCustomerManagedKey#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html#update EventhubNamespaceCustomerManagedKey#update}
  */
  readonly update?: string;
}

export function eventhubNamespaceCustomerManagedKeyTimeoutsToTerraform(struct?: EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference | EventhubNamespaceCustomerManagedKeyTimeouts): any {
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

export class EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventhubNamespaceCustomerManagedKeyTimeouts | undefined {
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

  public set internalValue(value: EventhubNamespaceCustomerManagedKeyTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html azurerm_eventhub_namespace_customer_managed_key}
*/
export class EventhubNamespaceCustomerManagedKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_eventhub_namespace_customer_managed_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html azurerm_eventhub_namespace_customer_managed_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventhubNamespaceCustomerManagedKeyConfig
  */
  public constructor(scope: Construct, id: string, config: EventhubNamespaceCustomerManagedKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventhub_namespace_customer_managed_key',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eventhubNamespaceId = config.eventhubNamespaceId;
    this._keyVaultKeyIds = config.keyVaultKeyIds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eventhub_namespace_id - computed: false, optional: false, required: true
  private _eventhubNamespaceId?: string; 
  public get eventhubNamespaceId() {
    return this.getStringAttribute('eventhub_namespace_id');
  }
  public set eventhubNamespaceId(value: string) {
    this._eventhubNamespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubNamespaceIdInput() {
    return this._eventhubNamespaceId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_key_ids - computed: false, optional: false, required: true
  private _keyVaultKeyIds?: string[]; 
  public get keyVaultKeyIds() {
    return this.getListAttribute('key_vault_key_ids');
  }
  public set keyVaultKeyIds(value: string[]) {
    this._keyVaultKeyIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdsInput() {
    return this._keyVaultKeyIds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EventhubNamespaceCustomerManagedKeyTimeouts) {
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
      eventhub_namespace_id: cdktf.stringToTerraform(this._eventhubNamespaceId),
      key_vault_key_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._keyVaultKeyIds),
      timeouts: eventhubNamespaceCustomerManagedKeyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
