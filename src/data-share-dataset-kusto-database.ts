// https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataShareDatasetKustoDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_database.html#kusto_database_id DataShareDatasetKustoDatabase#kusto_database_id}
  */
  readonly kustoDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_database.html#name DataShareDatasetKustoDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_database.html#share_id DataShareDatasetKustoDatabase#share_id}
  */
  readonly shareId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_database.html#timeouts DataShareDatasetKustoDatabase#timeouts}
  */
  readonly timeouts?: DataShareDatasetKustoDatabaseTimeouts;
}
export interface DataShareDatasetKustoDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_database.html#create DataShareDatasetKustoDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_database.html#delete DataShareDatasetKustoDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_database.html#read DataShareDatasetKustoDatabase#read}
  */
  readonly read?: string;
}

export function dataShareDatasetKustoDatabaseTimeoutsToTerraform(struct?: DataShareDatasetKustoDatabaseTimeoutsOutputReference | DataShareDatasetKustoDatabaseTimeouts): any {
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

export class DataShareDatasetKustoDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataShareDatasetKustoDatabaseTimeouts | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataShareDatasetKustoDatabaseTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_database.html azurerm_data_share_dataset_kusto_database}
*/
export class DataShareDatasetKustoDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_share_dataset_kusto_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_database.html azurerm_data_share_dataset_kusto_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataShareDatasetKustoDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataShareDatasetKustoDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_share_dataset_kusto_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._kustoDatabaseId = config.kustoDatabaseId;
    this._name = config.name;
    this._shareId = config.shareId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kusto_cluster_location - computed: true, optional: false, required: false
  public get kustoClusterLocation() {
    return this.getStringAttribute('kusto_cluster_location');
  }

  // kusto_database_id - computed: false, optional: false, required: true
  private _kustoDatabaseId?: string; 
  public get kustoDatabaseId() {
    return this.getStringAttribute('kusto_database_id');
  }
  public set kustoDatabaseId(value: string) {
    this._kustoDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kustoDatabaseIdInput() {
    return this._kustoDatabaseId;
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

  // share_id - computed: false, optional: false, required: true
  private _shareId?: string; 
  public get shareId() {
    return this.getStringAttribute('share_id');
  }
  public set shareId(value: string) {
    this._shareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIdInput() {
    return this._shareId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataShareDatasetKustoDatabaseTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataShareDatasetKustoDatabaseTimeouts) {
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
      kusto_database_id: cdktf.stringToTerraform(this._kustoDatabaseId),
      name: cdktf.stringToTerraform(this._name),
      share_id: cdktf.stringToTerraform(this._shareId),
      timeouts: dataShareDatasetKustoDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
